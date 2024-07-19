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

const data: Chain[] = [];

let indexCounter = 0;

const generateSupportedServicesDatesFromCache = (services: {
  [key: string]: string;
}): SupportedServices => {
  const currentDate = new Date().toISOString();
  const cacheFilePath = path.join(
    __dirname,
    '../../../data/V2/chains-lock.json',
  );
  const updatedServices: any = {};

  for (const service in services) {
    const status = services[service];
    updatedServices[service as ServiceID] = {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    } as ServiceStatusDates;

    switch (status) {
      case 'beta':
        updatedServices[service].beta_released_at = currentDate;
        break;
      case 'released':
        updatedServices[service].full_released_at = currentDate;
        break;
      case 'deprecated':
        updatedServices[service].deprecated_at = currentDate;
        break;
      // No case for "unreleased" as all dates remain null
    }
  }

  return updatedServices;
};

Object.keys(indexConf.ordered).forEach((mainnet, mainnetIndex) => {
  // @ts-ignore
  const mainnetData: MainnetData = chainData[toCamelCase(mainnet)];

  mainnetData.index = indexCounter++;
  mainnetData.supported_services = generateSupportedServicesDatesFromCache(
    mainnetData.supported_services,
  );

  (indexConf as IndexConfig).ordered[mainnet].forEach((subnet: any) => {
    // @ts-ignore
    const subnetData: SubnetData = chainData[toCamelCase(subnet)];

    subnetData.index = indexCounter++;
    subnetData.supported_services = generateSupportedServicesDatesFromCache(
      subnetData.supported_services,
    );

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
