import { chains } from '.';
import {
  Chain,
  ChainBase,
  ConsensusLayer,
  EVM,
  Testnet,
} from '../types/chain.types';

const isFirehoseSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  if (checkBeta) {
    return (
      chain?.supported_services?.firehose?.beta.released_at !== null &&
      chain?.supported_services?.firehose?.beta.deprecated_at === null
    );
  }
  return (
    chain?.supported_services?.firehose?.full.released_at !== null &&
    chain?.supported_services?.firehose?.full.deprecated_at === null
  );
};

const isSubstreamsSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  if (checkBeta) {
    return (
      chain?.supported_services?.substreams?.beta.released_at !== null &&
      chain?.supported_services?.substreams?.beta.deprecated_at === null
    );
  }
  return (
    chain?.supported_services?.substreams?.full.released_at !== null &&
    chain?.supported_services?.substreams?.full.deprecated_at === null
  );
};

const isRpcSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  // Can take a Consensus Layer as parameter but will always return false.
  const castedChain = chain as any;
  if (castedChain.supported_services.rpc === undefined) {
    return false;
  }

  if (checkBeta) {
    return (
      castedChain?.supported_services?.rpc?.beta.released_at !== null &&
      castedChain?.supported_services?.rpc?.beta.deprecated_at === null
    );
  }

  return (
    castedChain?.supported_services?.rpc?.released_at !== null &&
    castedChain?.supported_services?.rpc?.deprecated_at === null
  );
};

const isChainSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  return (
    isFirehoseSupported(chain, checkBeta) ||
    isSubstreamsSupported(chain, checkBeta) ||
    isRpcSupported(chain, checkBeta)
  );
};

const wasFirehoseOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  if (checkBeta) {
    return chain?.supported_services?.firehose?.beta.released_at !== null;
  }
  return chain?.supported_services?.firehose?.full.released_at !== null;
};

const wasSubstreamsOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  if (checkBeta) {
    return chain?.supported_services?.substreams?.beta.released_at !== null;
  }
  return chain?.supported_services?.substreams?.full.released_at !== null;
};

const wasRpcOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  // Can take a Consensus Layer as parameter but will always return false.
  const castedChain = chain as any;
  if (castedChain.supported_services.rpc === undefined) {
    return false;
  }

  if (checkBeta) {
    return castedChain?.supported_services?.rpc?.beta.released_at !== null;
  }

  return castedChain?.supported_services?.rpc?.released_at !== null;
};

const wasChainOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  checkBeta: boolean = false,
): boolean => {
  return (
    wasFirehoseOnceSupported(chain, checkBeta) ||
    wasSubstreamsOnceSupported(chain, checkBeta) ||
    wasRpcOnceSupported(chain, checkBeta)
  );
};

/**
 * This function takes an array of chains and returns a new array that includes the chains
 * and their associated testnets, consensus layers, and EVMs, if the corresponding flags are set to true.
 * The chains are first filtered based on a provided filter function and whether they are supported.
 * Then they are sorted based on a provided sort function.
 *
 * Note that the sort function is applied at two levels: first to the chains,
 * then to the testnets, consensus layers, and EVMs. This is so that the mainnets and
 * their associated testnets, consensus layers, and EVMs remain grouped together in the final array.
 *
 * @param {Array<Chain>} chains - The array of chains to be processed.
 * @param {(a: ChainBase, b: ChainBase) => number} [sortFn=() => 0] - The function used to sort the chains.
 * @param {(chain: ChainBase) => boolean} [filterFn=() => true] - The function used to filter the chains.
 * @param {boolean} [includeBeta=false] - Whether to include chains that are in beta.
 * @param {boolean} [includeTestnet=false] - Whether to include testnets associated with the chains.
 * @param {boolean} [includeConsensusLayer=false] - Whether to include consensus layers associated with the chains.
 * @param {boolean} [includeEVM=false] - Whether to include EVMs associated with the chains.
 *
 * @returns {Array<Chain | Testnet | ConsensusLayer | EVM>} - The new array of chains, testnets, consensus layers, and EVMs.
 */
const filterSortChains = (
  chains: Array<Chain>,
  sortFn: (a: ChainBase, b: ChainBase) => number = () => 0,
  filterFn: (chain: ChainBase) => boolean = () => true,
  includeBeta: boolean = false,
  includeTestnet: boolean = false,
  includeConsensusLayer: boolean = false,
  includeEVM: boolean = false,
): Array<Chain | Testnet | ConsensusLayer | EVM> => {
  const __internalFilterSortChains = (
    chains: Array<Chain | Testnet | ConsensusLayer | EVM>,
  ) => {
    return (
      chains
        // Further filter the chains based on support for Firehose, Substreams, and RPC
        // Largest potential filter so we do this first
        .filter((chain) => isChainSupported(chain as Chain, includeBeta))
        // First filter the chains based on the filter function (search, etc.)
        .filter(filterFn)
        // Then sort the chains based on the sort function
        .sort(sortFn)
    );
  };

  // First filter-sort Mainnets
  let filteredSortedChains = __internalFilterSortChains(chains);

  // Then for each Mainnet, include its testnets, consensus layers, and EVM
  // if the flags are set to true
  let newFilteredSortedChains: Array<Chain | Testnet | ConsensusLayer | EVM> =
    [];
  filteredSortedChains.forEach((chain: any) => {
    let modifiedChain = chain;

    if (includeTestnet && chain.testnets !== undefined) {
      modifiedChain.testnets = __internalFilterSortChains(chain.testnets);
    } else {
      delete modifiedChain.testnets;
    }

    if (includeConsensusLayer && chain.consensus !== undefined) {
      modifiedChain.consensus = __internalFilterSortChains(chain.consensus);
    } else {
      delete modifiedChain.consensus;
    }

    if (includeEVM && chain.evms !== undefined) {
      modifiedChain.evms = __internalFilterSortChains(chain.evms);
    } else {
      delete modifiedChain.evms;
    }
    newFilteredSortedChains.push(modifiedChain);
  });
  return newFilteredSortedChains;
};

const flattenChains = (
  chains: Array<Chain>,
): Array<Chain | Testnet | ConsensusLayer | EVM> => {};

export {
  isFirehoseSupported,
  isSubstreamsSupported,
  isRpcSupported,
  isChainSupported,
  wasFirehoseOnceSupported,
  wasSubstreamsOnceSupported,
  wasRpcOnceSupported,
  wasChainOnceSupported,
  filterSortChains,
};
