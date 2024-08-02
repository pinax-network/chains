import fs from 'fs';
import path from 'path';
import { toCamelCase } from '../../../utils/case';

console.log('🕑 Generating data index...');

const dataDir = path.join(__dirname, '../../../', 'data/chains/V2');
let indexContent = '';

// Generate the GraphId type definition
const indexGeneratedComment = `// This file is auto-generated on pre-commit to avoid maintaining it.\n// Do not modify manually as it will be overwritten.\n// Last generation on ${new Date().toLocaleString()}.\n\n`;

indexContent += indexGeneratedComment;

fs.readdirSync(dataDir).forEach((mainnetDir) => {
  // Ignore index.ts and chains.json files
  if (mainnetDir === 'index.ts' || mainnetDir === 'chains.json') return;

  const mainnetPath = path.join(dataDir, mainnetDir);
  const mainnetMetaPath = path.join(mainnetPath, 'meta.ts');

  if (fs.existsSync(mainnetMetaPath)) {
    indexContent += `export { default as ${toCamelCase(mainnetDir)} } from './${mainnetDir}/meta';\n`;
  }

  ['testnets', 'consensus', 'evms'].forEach((subnetType) => {
    const subnetPath = path.join(mainnetPath, subnetType);

    if (fs.existsSync(subnetPath)) {
      fs.readdirSync(subnetPath).forEach((subnetDir) => {
        const subnetMetaPath = path.join(subnetPath, subnetDir, 'meta.ts');

        if (fs.existsSync(subnetMetaPath)) {
          indexContent += `export { default as ${toCamelCase(subnetDir)} } from './${mainnetDir}/${subnetType}/${subnetDir}/meta';\n`;
        }
      });
    }
  });
});

fs.writeFileSync(path.join(dataDir, 'index.ts'), indexContent);

console.log('✅ Successfully generated data index!');
