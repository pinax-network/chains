import fs from 'fs';
import path from 'path';
import { Chain } from '../types';
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

describe('chain_find_by_id', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_find_mainnet___returns_mainnet', () => {
    const chainID = 'eth';
    let chain = findChainById(chains, chainID) as Chain;
    expect(chain.id).toBe(chainID);
  });

  test('assert_find_testnet___returns_testnet', () => {
    const chainID = 'holesky';
    let chain = findChainById(chains, chainID) as Chain;
    expect(chain.id).toBe(chainID);
  });

  test('assert_find_consensus_layer___returns_consensus_layer', () => {
    const chainID = 'eth-cl';
    let chain = findChainById(chains, chainID) as Chain;
    expect(chain.id).toBe(chainID);
  });

  test('assert_find_evm___returns_evm', () => {
    const chainID = 'eosevm';
    let chain = findChainById(chains, chainID) as Chain;
    expect(chain.id).toBe(chainID);
  });

  test('assert_find_non_existent___returns_undefined', () => {
    const chainID = 'this_is_a_chain_id_that_does_not_exist';
    let chain = findChainById(chains, chainID);
    expect(chain).toBe(undefined);
  });
});
