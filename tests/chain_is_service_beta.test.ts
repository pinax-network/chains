import fs from 'fs';
import path from 'path';
import { Chain } from '../types';
import { findChainById, isServiceBeta } from '../utils/chains';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_is_service_beta', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_beta_service___returns_true', () => {
    const chainID = 'mode';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error('Expected ' + chainID + ', but got ' + chain.id);
    }
    expect(isServiceBeta(chain, 'rpc')).toBe(true);
  });

  test('assert_supported_service___returns_false', () => {
    const chainID = 'eth';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error('Expected ' + chainID + ', but got ' + chain.id);
    }
    expect(isServiceBeta(chain, 'rpc')).toBe(false);
  });

  test('assert_deprecated_service___returns_false', () => {
    const chainID = 'goerli';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error('Expected ' + chainID + ', but got ' + chain.id);
    }
    expect(isServiceBeta(chain, 'firehose')).toBe(false);
  });

  test('assert_unsupported_chain___returns_false', () => {
    const chainID = 'zksync';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error('Expected ' + chainID + ', but got ' + chain.id);
    }
    expect(isServiceBeta(chain, 'firehose')).toBe(false);
  });
});
