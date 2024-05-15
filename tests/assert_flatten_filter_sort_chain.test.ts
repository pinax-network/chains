// Test the filterSortChain function in the utils.ts file.
import fs from 'fs';
import { expect, test, describe, beforeEach } from 'bun:test';
import { filterSortChains, isChainSupported } from '../utils/chains';
import { Chain, ChainBase } from '../types';

// Read and parse the chains.json file
let chains = JSON.parse(
  fs.readFileSync('./data/chains/V2/chains.json', 'utf-8'),
);

describe('filterSortChain', () => {
  beforeEach(() => {
    // Reset the chains variable before each test
    chains = JSON.parse(
      fs.readFileSync('./data/chains/V2/chains.json', 'utf-8'),
    );
  });

  test('should return an empty array if no chains are provided', () => {
    const result = filterSortChains([]);

    // fs.writeFileSync('./filterSortChain.1.json', JSON.stringify(result));

    expect(result).toHaveLength(0);
  });

  test('should return all supported mainnets if a chains array is provided with no other params', () => {
    const result = filterSortChains(chains);

    // fs.writeFileSync('./filterSortChain.2.json', JSON.stringify(result));

    expect(result).toHaveLength(
      chains.filter((chain: Chain) => isChainSupported(chain)).length,
    );
  });

  test('should filter the chains based on the provided filter function', () => {
    // Define a filter function that only returns the eth chain
    // Emulates a search for the ethereum chain
    const filterFn = (chain: ChainBase) =>
      chain.name.toLocaleLowerCase().indexOf('eth') !== -1 ||
      chain.id.toLocaleLowerCase().indexOf('eth') !== -1 ||
      chain.alt_names.includes('eth');

    const result = filterSortChains(chains, () => 0, filterFn);

    // fs.writeFileSync('./filterSortChain.3.json', JSON.stringify(result));

    expect(result).toHaveLength(1);
  });

  test('should sort the chains based on the provided sort function', () => {
    // Define a sort function that sorts the chains in reverse alphabetical order
    const sortFn = (a: ChainBase, b: ChainBase) => b.name.localeCompare(a.name);
    const result = filterSortChains(chains, sortFn);

    // fs.writeFileSync('./filterSortChain.4.json', JSON.stringify(result));

    const sortedChains = chains
      .filter((chain: Chain) => isChainSupported(chain))
      .sort((a: ChainBase, b: ChainBase) => b.name.localeCompare(a.name));
    expect(result).toEqual(sortedChains);
  });

  test('should include beta chains if includeBeta is true', () => {
    const result = filterSortChains(
      chains,
      () => 0,
      () => true,
      true,
    );

    // fs.writeFileSync('./filterSortChain.5.json', JSON.stringify(result));

    expect(result).toHaveLength(
      chains.filter((chain: Chain) => isChainSupported(chain, true)).length,
    );
  });

  test('should include testnets if includeTestnet is true', () => {
    const result = filterSortChains(
      chains,
      () => 0,
      () => true,
      false,
      true,
    );

    fs.writeFileSync('./filterSortChain.6.json', JSON.stringify(result));

    const eth = result.find((chain) => chain.id === 'eth') as Chain;
    const ethTestnets = eth?.testnets?.length || 0;

    expect(ethTestnets).toBeGreaterThan(0);
  });

  // test('should include consensus layers if includeConsensusLayer is true', () => {
  //   // Fail First
  //   expect(true).toBe(false);
  // });

  // test('should include EVMs if includeEVM is true', () => {
  //   // Fail First
  //   expect(true).toBe(false);
  // });
});
