import fs from 'fs';
import path from 'path';
import * as chainData from '../../../data/chains/V2/index';
import { toCamelCase } from '../../../utils/case';
import indexConf from '../../../data/index.config';
import { IndexConfig } from './index_config_check';
import {
  Chain,
  ServiceID,
  ServiceStatusDates,
  SupportedServices,
} from '../../../types';

interface SubnetData {
  id: string;
  index: number;
  supported_services: SupportedServices;
}

console.log('🕑 Generating data.json...');

if (indexConf.missing.length > 0) {
  console.log(
    '⚠️  Missing chains detected. Please add them to the ./data/index.config.ts file.',
  );
  process.exit(1);
}

// 1. Load the chains-lock file
// 2. Iterate through chain data (from index)
// 3. For each chain, find their lock version using findChainById
// 4. Check lock version dates and update the chain data
//

const data: Chain[] = [];

let indexCounter = 0;

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
