import fs from 'node:fs';
import path from 'node:path';
import type { Chain } from '../types';
import { findChainById, isServiceSupported } from '../utils/chains';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_is_service_supported', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_supported_service___returns_true', () => {
    const chainID = 'eth';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceSupported(chain, 'rpc')).toBe(true);
  });

  test('assert_deprecated_service___returns_false', () => {
    const chainID = 'goerli';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceSupported(chain, 'firehose')).toBe(false);
  });

  test('assert_unsupported_chain___returns_false', () => {
    const chainID = 'zksync';
    const chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(`Expected ${chainID}, but got ${chain.id}`);
    }
    expect(isServiceSupported(chain, 'firehose')).toBe(false);
  });
});
