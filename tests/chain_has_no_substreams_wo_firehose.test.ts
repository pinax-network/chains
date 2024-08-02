import fs from 'fs';
import path from 'path';
import { Chain } from '../types';

const setup = (): Array<Chain> => {
  // read the data file as JSON
  const chainsFile = path.join(__dirname, '../', 'data/chains/V2/chains.json');
  if (fs.existsSync(chainsFile)) {
    const chains = JSON.parse(fs.readFileSync(chainsFile, 'utf8'));
    return chains;
  }
  return [];
};

describe('chain_has_no_substreams_wo_firehose', () => {
  let chains: Array<Chain>;
  beforeAll(() => {
    chains = setup();
  });

  const hasDuplicates = (array: Array<number>) => {
    return new Set(array).size !== array.length;
  };

  test('assert_chain_services_are_valid', () => {
    expect(
      hasDuplicates(chains.map((chain) => chain.index) as Array<number>),
    ).toBe(false);
  });
});
