import fs from 'fs';
import path from 'path';
import { toCamelCase } from '../../../src/utils/case';

console.log('🕑 Generating data index...');

const dataDir = path.join(__dirname, '../../../src', 'data/chains/V2');
let indexContent = '';

fs.readdirSync(dataDir).forEach((mainnetDir) => {
  if (mainnetDir === 'index.ts') return; // Ignore index.ts file

  const mainnetPath = path.join(dataDir, mainnetDir);
  const mainnetMetaPath = path.join(mainnetPath, 'meta.ts');

  if (fs.existsSync(mainnetMetaPath)) {
    indexContent += `export { default as ${toCamelCase(mainnetDir)} } from './${mainnetDir}/meta';\n`;
  }

  fs.readdirSync(mainnetPath).forEach((testnetDir) => {
    const testnetPath = path.join(mainnetPath, testnetDir);
    const testnetMetaPath = path.join(testnetPath, 'meta.ts');

    if (fs.existsSync(testnetMetaPath)) {
      indexContent += `export { default as ${toCamelCase(testnetDir)} } from './${mainnetDir}/${testnetDir}/meta';\n`;
    }
  });
});

fs.writeFileSync(path.join(dataDir, 'index.ts'), indexContent);

console.log('✅ Successfully generated data index!');
