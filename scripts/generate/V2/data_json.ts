import fs from 'fs';
import path from 'path';
import bun from 'bun';
import * as chainData from '../../../data/chains/V2/index';
import { toCamelCase } from '../../../utils/case';
import indexConf from '../../../data/index.config';
import { IndexConfig } from './index_config_check';
import { Chain, SupportedServices } from '../../../types';

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

const data: Chain[] = [];

let indexCounter = 0;

const cacheGenerateServiceDates = (services: SupportedServices) => {
  // Read the cache file at ./data/chains/V2/chains-lock.json
  // If the file does not exist, throw an error, and exit the script
  // If the file exists, parse the file
};

Object.keys(indexConf.ordered).forEach((mainnet, mainnetIndex) => {
  // @ts-ignore
  const mainnetData: MainnetData = chainData[toCamelCase(mainnet)];

  mainnetData.index = indexCounter++;

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

console.log(`✅ Successfully generated 'chains.json'!`);
