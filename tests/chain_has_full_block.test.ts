import fs from 'node:fs';
import path from 'node:path';
import type { Chain } from '../types';
import { findChainById, hasChainFullBlockSupport } from '../utils/chains';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_has_full_block', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_full_block_chain___returns_true', () => {
    const chainID = 'eth';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(hasChainFullBlockSupport(chain)).toBe(true);
  });

  test('assert_partial_block_chain___returns_false', () => {
    const chainID = 'bitcoin';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(hasChainFullBlockSupport(chain)).toBe(false);
  });
});
