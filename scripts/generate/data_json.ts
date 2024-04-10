import fs from 'fs';
import path from 'path';
import bun from 'bun';
import * as chainData from '../../src/data/index';
import { toCamelCase } from '../../src/utils/case';
interface Icon {
  id: string;
  variants: string[];
}

interface Network {
  id: string;
  icon: Icon;
}

interface Token {
  id: string;
  variants: string[];
}

interface MainnetData {
  index: number;
  icon: Icon;
  consensus_layers?: SubnetData[];
  testnets?: SubnetData[];
}

interface SubnetData {
  id: string;
  index: number;
}

console.log('🕑 Generating data.json...');

const tokens: Token[] = JSON.parse(
  fs.readFileSync(
    path.resolve('node_modules/@token-icons/core/dist/metadata/tokens.json'),
    'utf8',
  ),
);

const networks: Network[] = JSON.parse(
  fs.readFileSync(
    path.resolve('node_modules/@token-icons/core/dist/metadata/networks.json'),
    'utf8',
  ),
);

const indexConfigPath = path.join(
  __dirname,
  '../../src/configs/index.config.json',
);

const indexConf: { [key: string]: string[] } = JSON.parse(
  fs.readFileSync(indexConfigPath, 'utf8'),
);

const data: MainnetData[] = [];
const warnings: string[] = [];

Object.keys(indexConf).forEach((mainnet, mainnetIndex) => {
  // @ts-ignore
  const mainnetData: MainnetData = chainData[toCamelCase(mainnet)];

  mainnetData.index = mainnetIndex * 1000;

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
      // @ts-ignore
      mainnetData.icon.variants = iconMeta.variants;
    } else {
      warnings.push(
        `⚠️  Could not find icon meta for '${mainnetData.icon.id}'`,
      );
    }
  }

  indexConf[mainnet].forEach((subnet, subnetIndex) => {
    // @ts-ignore
    const subnetData: SubnetData = chainData[toCamelCase(subnet)];

    subnetData.index = mainnetData.index + subnetIndex + 1;

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

const distFolderPath = path.join(__dirname, '../../dist');
if (!fs.existsSync(distFolderPath)) {
  fs.mkdirSync(distFolderPath);
}

fs.writeFileSync(
  path.join(distFolderPath, 'data.json'),
  JSON.stringify(data, null, 2),
);

if (warnings.length) {
  console.log(warnings.join('\n'));
  console.log(`☑️ Generated 'data.json' with ${warnings.length} warnings`);
} else {
  console.log(`✅ Successfully generated 'data.json'!`);
}
