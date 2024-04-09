const fs = require('fs');
const path = require('path');

const tokens = JSON.parse(
  fs.readFileSync(
    path.resolve('node_modules/@token-icons/core/dist/metadata/tokens.json'),
  ),
);
const networks = JSON.parse(
  fs.readFileSync(
    path.resolve('node_modules/@token-icons/core/dist/metadata/networks.json'),
  ),
);

// Define the path to the config file
const indexConfigPath = path.join(
  __dirname,
  '../../src/configs/index.config.json',
);

// Read the config file
const indexConf = JSON.parse(fs.readFileSync(indexConfigPath, 'utf8'));

// Define the directory containing the JSON files
const directoryPath = path.join(__dirname, '../../src/data');

const data = [];
const warnings = [];

Object.keys(indexConf).forEach((mainnet, mainnetIndex) => {
  // Read mainnet data file
  const mainnetDirPath = path.join(directoryPath, mainnet);
  const mainnetFilePath = path.join(mainnetDirPath, 'meta.json');
  const mainnetData = JSON.parse(fs.readFileSync(mainnetFilePath, 'utf8'));

  // Set the index for the mainnet (multiplied by 1000 to avoid conflicts with subnets)
  mainnetData.index = mainnetIndex * 1000;

  // Inject icon data from token-icons
  if (mainnetData.icon.id.indexOf('tokens') !== -1) {
    const iconMeta = tokens.find(
      (token) => token.id === mainnetData.icon.id.split('/')[1],
    );
    if (iconMeta) {
      mainnetData.icon.variants = iconMeta.variants;
    } else {
      warnings.push(
        `⚠️  Could not find icon meta for '${mainnetData.icon.id}'`,
      );
    }
  } else {
    const iconMeta = networks.find(
      (network) => network.id === mainnetData.icon.id.split('/')[1],
    );
    if (iconMeta) {
      mainnetData.icon.variants = iconMeta.variants;
    } else {
      warnings.push(
        `⚠️  Could not find icon meta for '${mainnetData.icon.id}'`,
      );
    }
  }

  // Loop through the subnets
  indexConf[mainnet].forEach((subnet, subnetIndex) => {
    // Read subnet data file
    const subnetDirPath = path.join(mainnetDirPath, subnet);
    const subnetFilePath = path.join(subnetDirPath, 'meta.json');
    const subnetData = JSON.parse(fs.readFileSync(subnetFilePath, 'utf8'));

    subnetData.index = mainnetData.index + subnetIndex + 1;

    // Add subnet data to mainnet data, depending on the subnet type (consensus layer or testnet)
    if (subnetData.id.indexOf('-cl') !== -1) {
      if (!mainnetData.consensus_layers) mainnetData.consensus_layers = [];
      mainnetData.consensus_layers.push(subnetData);
    } else {
      if (!mainnetData.testnets) mainnetData.testnets = [];
      mainnetData.testnets.push(subnetData);
    }
  });
  data.push(mainnetData);
});

// Create the 'dist' folder if it doesn't exist
const distFolderPath = path.join(__dirname, '../../dist');
if (!fs.existsSync(distFolderPath)) {
  fs.mkdirSync(distFolderPath);
}

// Write the combined data to a new JSON file
// Write the combined data to a new JSON file
fs.writeFileSync(
  path.join(distFolderPath, 'data.json'),
  JSON.stringify(data, null, 2),
);

// Log warnings
if (warnings.length) {
  console.log(warnings.join('\n'));
  console.log(
    `☑️  Data written to 'data.json' with ${warnings.length} warnings`,
  );
} else {
  console.log(`✅  Data written to 'data.json'`);
}
