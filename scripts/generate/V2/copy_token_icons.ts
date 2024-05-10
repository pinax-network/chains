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
    `${chain.icon.id.split('/')[1]}.svg`,
  );
  const monoIconPath: string = path.join(
    iconBasePath,
    'mono',
    `${chain.icon.id.split('/')[1]}.svg`,
  );

  // Define the destination file paths
  const destBrandedIconPath: string = path.join(
    destDir,
    `${chain.id}.branded.svg`,
  );
  const destMonoIconPath: string = path.join(destDir, `${chain.id}.mono.svg`);

  // Copy the branded icon to the destination directory
  if (fs.existsSync(brandedIconPath)) {
    fs.copyFileSync(brandedIconPath, destBrandedIconPath);
  }

  // Copy the mono icon to the destination directory
  if (fs.existsSync(monoIconPath)) {
    fs.copyFileSync(monoIconPath, destMonoIconPath);
  }
}
