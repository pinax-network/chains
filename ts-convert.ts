import fs from 'fs';
import path from 'path';
import { Chain, Testnet } from './src/types/chain.types';

const dataDir = path.join(__dirname, 'src', 'data');

fs.readdirSync(dataDir).forEach((mainnetDir) => {
  const mainnetPath = path.join(dataDir, mainnetDir);
  const mainnetMetaPath = path.join(mainnetPath, 'meta.json');

  if (fs.existsSync(mainnetMetaPath)) {
    const mainnetMeta = fs.readFileSync(mainnetMetaPath, 'utf-8');
    const mainnetMetaTs: Chain = JSON.parse(mainnetMeta);
    fs.writeFileSync(
      path.join(mainnetPath, 'meta.ts'),
      `import { Chain } from "../../types/chain.types";\n\nconst meta: Chain = ${JSON.stringify(mainnetMetaTs, null, 2)};\n\nexport default meta;\n`,
    );
  }

  fs.readdirSync(mainnetPath).forEach((testnetDir) => {
    const testnetPath = path.join(mainnetPath, testnetDir);
    const testnetMetaPath = path.join(testnetPath, 'meta.json');

    if (fs.existsSync(testnetMetaPath)) {
      const testnetMeta = fs.readFileSync(testnetMetaPath, 'utf-8');
      const testnetMetaTs: Testnet = JSON.parse(testnetMeta);
      fs.writeFileSync(
        path.join(testnetPath, 'meta.ts'),
        `import { Testnet } from "../../../types/chain.types";\n\nconst meta: Testnet = ${JSON.stringify(testnetMetaTs, null, 2)};\n\nexport default meta;\n`,
      );
    }
  });
});
