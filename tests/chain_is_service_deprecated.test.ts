import fs from 'node:fs';
import path from 'node:path';
import type { Chain } from '../types';
import { findChainById, isServiceDeprecated } from '../utils/chains';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_is_service_deprecated', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_deprecated_service___returns_true', () => {
    const chainID = 'goerli';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceDeprecated(chain, 'substreams')).toBe(true);
  });

  test('assert_supported_service___returns_false', () => {
    const chainID = 'eth';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceDeprecated(chain, 'rpc')).toBe(false);
  });

  test('assert_unsupported_service___returns_false', () => {
    const chainID = 'zksync';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceDeprecated(chain, 'firehose')).toBe(false);
  });
});
