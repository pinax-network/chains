import fs from 'fs';
import path from 'path';
import { Chain } from '../types';
import { findChainById } from '../utils/chains';
import indexConfig from '../data/index.config';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_exported', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  it('assert_every_indexconfig_chain_is_exported', () => {
    const allChainIds = Object.values(indexConfig.ordered).flat();

    allChainIds.forEach((chainId) => {
      const chain = findChainById(chains, chainId);
      expect(chain).toBeDefined();
      expect(chain?.id).toBe(chainId);
    });
  });
});
