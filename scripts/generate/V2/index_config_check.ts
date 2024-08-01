import fs from 'fs';
import path from 'path';
import config from '../../../data/index.config';

export type IndexConfig = {
  ordered: { [key: string]: string[] };
  missing?: string[];
};

console.log('🕑 Checking integrity of index.config.ts...');

const configCast: IndexConfig = config;

// Function to get directories recursively
const getDirectories = (basePath: string, depth: number = 0): Array<string> => {
  const directories: Array<string> = [];
  const files = fs.readdirSync(basePath, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      const dirPath = path.join(basePath, file.name);
      if (depth === 0 || depth === 2) {
        directories.push(dirPath.split(path.sep).pop() || '');
      }

      // Get subdirectories
      const subdirectories: Array<string> = getDirectories(dirPath, depth + 1);
      directories.push(...subdirectories);
    }
  }

  return directories;
};

// Get the list of directories under /data/chains/V2/
const chainsPath = './data/chains/V2';
const directories = getDirectories(chainsPath);

// Get the list of chains already in the config file
const existingChains = Object.keys(configCast.ordered);
existingChains.forEach((chain: string) => {
  if (configCast.ordered[chain].length > 0) {
    existingChains.push(...configCast.ordered[chain]);
  }
});

// Find the missing chains
const missingChains = directories.filter(
  (chain: string) => !existingChains.includes(chain),
);

// Add the missing chains
configCast.missing = missingChains;

// Notice for the generated file
const fileGenerationNotive = `// This file is partially auto-generated.\n// Chains under ordered were manually placed, to manage the z-index (priority order) of chains.\n// Chains under missing are generated from available data, make sure to order them.\n// Include deprecated or future chains. \n// Last generation on ${new Date().toLocaleString()}.`;

// Write the updated config back to the file
fs.writeFileSync(
  './data/index.config.ts',
  [
    fileGenerationNotive,
    `export default ${JSON.stringify(config, null, 2)}`,
  ].join('\n\n'),
);

console.log(`✅ Successfully checked index.config.ts integrity!`);
