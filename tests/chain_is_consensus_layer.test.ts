import fs from 'fs';
import path from 'path';
import { Chain } from '../types';
import { findChainById, isChainConsensusLayer } from '../utils/chains';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_is_consensus_layer', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  test('assert_consensus_layer___returns_true', () => {
    const chainID = 'eth-cl';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error(
        'Expected ' + chainID + ' Consensus Layer, but got ' + chain.id,
      );
    }
    expect(isChainConsensusLayer(chain)).toBe(true);
  });

  test('assert_non_consensus_layer___returns_false', () => {
    const chainID = 'eth';
    let chain = findChainById(chains, chainID) as Chain;
    if (chain.id !== chainID) {
      throw new Error('Expected ' + chainID + ' Mainnet, but got ' + chain.id);
    }
    expect(isChainConsensusLayer(chain)).toBe(false);
  });
});
