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
  const destLightIconPath: string = path.join(destDir, `${chain.id}.light.svg`);
  const destDarkIconPath: string = path.join(destDir, `${chain.id}.dark.svg`);
  const destMonoIconPath: string = path.join(destDir, `${chain.id}.mono.svg`);

  // Copy the branded icon to the destination directory
  if (fs.existsSync(brandedIconPath)) {
    fs.copyFileSync(brandedIconPath, destBrandedIconPath);
  }

  // Create the light icon by replacing '#fff' with '#fffffe' in the mono icon
  if (fs.existsSync(monoIconPath)) {
    let monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
    let lightIconContent = monoIconContent.replace(/#fff/g, '#fffffe');
    fs.writeFileSync(destLightIconPath, lightIconContent);
  }

  // Create the dark icon by replacing '#fff' with '#000001' in the mono icon
  if (fs.existsSync(monoIconPath)) {
    let monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
    let darkIconContent = monoIconContent.replace(/#fff/g, '#000001');
    fs.writeFileSync(destDarkIconPath, darkIconContent);
  }

  // Check if the mono icon exists in the destination directory, if it does, delete it
  if (fs.existsSync(destMonoIconPath)) {
    fs.unlinkSync(destMonoIconPath);
  }
}
