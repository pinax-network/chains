import fs from 'fs';
import path from 'path';
import bun from 'bun';
import * as chainData from '../../../data/chains/V2/index';
import { toCamelCase } from '../../../utils/case';
import indexConf from '../../../data/index.config';
import { IndexConfig } from './index_config_check';

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
  consensus?: SubnetData[];
  testnets?: SubnetData[];
  evms?: SubnetData[];
}

interface SubnetData {
  id: string;
  index: number;
}

console.log('🕑 Generating data.json...');

if (indexConf.missing.length > 0) {
  console.log(
    '⚠️  Missing chains detected. Please add them to the ./data/index.config.ts file.',
  );
  process.exit(1);
}

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

const data: MainnetData[] = [];
const warnings: string[] = [];

let indexCounter = 0;

Object.keys(indexConf.ordered).forEach((mainnet, mainnetIndex) => {
  // @ts-ignore
  const mainnetData: MainnetData = chainData[toCamelCase(mainnet)];

  mainnetData.index = indexCounter++;

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

  (indexConf as IndexConfig).ordered[mainnet].forEach((subnet: any) => {
    // @ts-ignore
    const subnetData: SubnetData = chainData[toCamelCase(subnet)];

    subnetData.index = indexCounter++;

    if (subnetData.id.indexOf('-cl') !== -1) {
      if (!mainnetData.consensus) mainnetData.consensus = [];
      mainnetData.consensus.push(subnetData);
    } else if (subnetData.id.indexOf('evm') !== -1) {
      if (!mainnetData.evms) mainnetData.evms = [];
      mainnetData.evms.push(subnetData);
    } else {
      if (!mainnetData.testnets) mainnetData.testnets = [];
      mainnetData.testnets.push(subnetData);
    }
  });
  data.push(mainnetData);
});

const dataFolderPath = path.join(__dirname, '../../../data/chains/V2');
if (!fs.existsSync(dataFolderPath)) {
  fs.mkdirSync(dataFolderPath);
}

fs.writeFileSync(
  path.join(dataFolderPath, 'chains.json'),
  JSON.stringify(data, null, 2),
);

if (warnings.length) {
  console.log(warnings.join('\n'));
  console.log(`☑️ Generated 'data.json' with ${warnings.length} warnings`);
} else {
  console.log(`✅ Successfully generated 'chains.json'! (V2)`);
}
