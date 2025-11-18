import fs from 'node:fs';
import path from 'node:path';
import * as chainData from '../../../data/chains/V2/index';
import indexConf from '../../../data/index.config';
import type { Chain, SupportedServices } from '../../../types';
import { toCamelCase } from '../../../utils/case';
import type { IndexConfig } from './index_config_check';

interface SubnetData {
  id: string;
  index: number;
  supported_services: SupportedServices;
  is_evm?: boolean;
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

Object.keys(indexConf.ordered).forEach((mainnet, _mainnetIndex) => {
  // @ts-expect-error
  const mainnetData: MainnetData = chainData[toCamelCase(mainnet)];

  mainnetData.index = indexCounter++;

  (indexConf as IndexConfig).ordered[mainnet].forEach((subnet: any) => {
    // @ts-expect-error
    const subnetData: SubnetData = chainData[toCamelCase(subnet)];

    subnetData.index = indexCounter++;

    if (subnetData?.is_evm) {
      if (!mainnetData.evms) mainnetData.evms = [];
      mainnetData.evms.push(subnetData);
    } else if (subnetData.id.indexOf('-cl') !== -1) {
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
