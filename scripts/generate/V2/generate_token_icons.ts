import fs from 'fs/promises';
import path from 'path';

async function downloadAndSaveIcons() {
  try {
    const chainsData = JSON.parse(
      await fs.readFile('data/chains/V2/chains.json', 'utf-8'),
    );

    for (const chain of Object.values(chainsData)) {
      const { id, icon } = chain as {
        id: string;
        icon: {
          id: string;
          symbol: string;
          variants: Array<'branded' | 'mono'>;
          type: 'networks' | 'tokens' | 'missing';
        };
      };

      if (icon.type === 'missing') {
        console.log('Icon is missing at web3icon, use custom one > ', id);
        continue;
      }

      for (const variant of icon.variants) {
        const iconUrl = `https://raw.githubusercontent.com/0xa3k5/web3icons/main/raw-svgs/${icon.type}/${variant}/${icon.type === 'networks' ? icon.id : icon.symbol?.toUpperCase()}.svg`;
        const targetDir = `data/chains/V2/${id}`;
        const targetPath = path.join(targetDir, `${id}.${variant}.svg`);

        try {
          await fs.mkdir(targetDir, { recursive: true });

          const response = await fetch(iconUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const svgContent = await response.text();

          await fs.writeFile(targetPath, svgContent);

          console.log(`Successfully downloaded icon: ${targetPath}`);
        } catch (error) {
          console.error(
            `Error downloading icon for ${icon.id}/${variant}:`,
            error.message,
          );
        }
      }
    }
  } catch (error) {
    console.error('Error processing chains.json file:', error.message);
  }
}

// Run the function
downloadAndSaveIcons();
