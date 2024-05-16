// Run after `npm run generate:data`
import fs from 'fs';
import path from 'path';

// Define the source directories for the icons
const networksSourceDir: string =
  './node_modules/@token-icons/core/dist/svgs/networks';
const tokensSourceDir: string =
  './node_modules/@token-icons/core/dist/svgs/tokens';

// Read and parse the chains.json file
const chains = JSON.parse(
  fs.readFileSync('./data/chains/V2/chains.json', 'utf-8'),
);

// Iterate over each chain
for (const chain of chains) {
  // Define the destination directory for the icons
  const destDir: string = `./data/chains/V2/${chain.id}`;
  const iconBasePath: string =
    chain.icon.id.split('/')[0] === 'networks'
      ? networksSourceDir
      : tokensSourceDir;

  // Define the paths to the icon variants
  const brandedIconPath: string = path.join(
    iconBasePath,
    'branded',
    `${chain.icon.id.split('/')[1].split('-')[0]}.svg`,
  );
  const monoIconPath: string = path.join(
    iconBasePath,
    'mono',
    `${chain.icon.id.split('/')[1].split('-')[0]}.svg`,
  );

  // Define the destination file paths
  const destBrandedIconPath: string = path.join(
    destDir,
    `${chain.id}.branded.svg`,
  );
  const destLightIconPath: string = path.join(destDir, `${chain.id}.light.svg`);
  const destDarkIconPath: string = path.join(destDir, `${chain.id}.dark.svg`);

  if (chain.icon.variants.includes('branded')) {
    // Copy the branded icon to the destination directory
    if (fs.existsSync(brandedIconPath)) {
      fs.copyFileSync(brandedIconPath, destBrandedIconPath);
    } else {
      if (
        // Those two chains IDs are not matching their svgs in the token-icons package
        chain.icon.id !== 'networks/binance-smart-chain' &&
        chain.icon.id !== 'networks/optimistic-ethereum'
      )
        console.warn(`⚠️  Branded icon not found for ${chain.id}`);
    }
  }

  if (chain.icon.variants.includes('mono')) {
    if (fs.existsSync(monoIconPath)) {
      // Create the light icon by replacing '#fff' with '#fffffe' in the mono icon
      let monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
      let lightIconContent = monoIconContent.replace(/#fff/g, '#fffffe');
      fs.writeFileSync(destLightIconPath, lightIconContent);

      // Create the dark icon by replacing '#fff' with '#000001' in the mono icon
      monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
      let darkIconContent = monoIconContent.replace(/#fff/g, '#000001');
      fs.writeFileSync(destDarkIconPath, darkIconContent);
    } else {
      if (
        // Those two chains IDs are not matching their svgs in the token-icons package
        chain.icon.id !== 'networks/binance-smart-chain' &&
        chain.icon.id !== 'networks/optimistic-ethereum'
      ) {
        console.warn(`⚠️  Mono icon not found for ${chain.id}`);
      }
    }
  }
}
