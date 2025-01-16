import {
  ConsensusLayer,
  Chain,
  EVM,
  Testnet,
  ChainIcon,
  ConsensusLayerServiceID,
  ServiceID,
  ServiceStatusDates,
} from '../types';

/**
 * Checks whether a service is fully supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
const isServiceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
): boolean => {
  // Check if supported_services is defined
  if (!chain.supported_services) {
    return false;
  }

  // @ts-ignore
  const serviceStatusDates = chain.supported_services[service] as
    | ServiceStatusDates
    | undefined;

  // Check if serviceStatusDates is defined
  if (!serviceStatusDates) {
    return false;
  }

  return (
    serviceStatusDates.full_released_at !== null &&
    new Date(serviceStatusDates.full_released_at) < new Date() &&
    serviceStatusDates.deprecated_at === null
  );
};

/**
 * Checks whether a service is in beta.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
const isServiceBeta = (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => {
  // @ts-ignore
  const serviceStatusDates = chain.supported_services[service] as
    | ServiceStatusDates
    | undefined;
  return (
    serviceStatusDates &&
    serviceStatusDates.beta_released_at !== null &&
    new Date(serviceStatusDates.beta_released_at) < new Date() &&
    serviceStatusDates.deprecated_at === null &&
    !isServiceSupported(chain, service)
  );
};

/**
 * Checks whether a service was once supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
const isServiceDeprecated = (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => {
  // @ts-ignore
  const serviceStatusDates = chain.supported_services[service] as
    | ServiceStatusDates
    | undefined;
  return (
    serviceStatusDates &&
    (serviceStatusDates.beta_released_at !== null ||
      serviceStatusDates.full_released_at !== null) &&
    serviceStatusDates.deprecated_at !== null
  );
};

/**
 * Checks whether any service is fully supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainSupported = (chain: Chain | Testnet | ConsensusLayer) => {
  return (
    isServiceSupported(chain, 'firehose') ||
    isServiceSupported(chain, 'substreams') ||
    isServiceSupported(chain, 'rpc') ||
    isServiceSupported(chain, 'datasets')
  );
};

/**
 * Checks whether any service is in beta for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainBeta = (chain: Chain | Testnet | ConsensusLayer) => {
  return (
    (isServiceBeta(chain, 'firehose') ||
      isServiceBeta(chain, 'substreams') ||
      isServiceBeta(chain, 'datasets') ||
      isServiceBeta(chain, 'rpc')) &&
    !isServiceSupported(chain, 'firehose') &&
    !isServiceSupported(chain, 'substreams') &&
    !isServiceSupported(chain, 'datasets') &&
    !isServiceSupported(chain, 'rpc')
  );
};

/**
 * Checks whether any service was once supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainDeprecated = (chain: Chain | Testnet | ConsensusLayer) => {
  return (
    isServiceDeprecated(chain, 'firehose') ||
    isServiceDeprecated(chain, 'substreams') ||
    isServiceDeprecated(chain, 'datasets') ||
    isServiceDeprecated(chain, 'rpc')
  );
};

/**
 * Finds a chain by its ID by scanning mainnets, consensus layers, testnets and EVMs.
 * Returns first match.
 *
 * @param db Array of Chains
 * @param id Chain ID
 *
 * @returns Chain, Testnet or ConsensusLayer
 */
const findChainById = (
  db: Array<Chain>,
  id: string,
): Chain | Testnet | ConsensusLayer | EVM | undefined => {
  for (const chain of db) {
    if (chain.id === id) {
      return chain;
    }
    const consensus = chain.consensus?.find((consensus) => consensus.id === id);
    if (consensus) {
      return consensus;
    }
    const testnet = chain.testnets?.find((testnet) => testnet.id === id);
    if (testnet) {
      return testnet;
    }
    const evm = chain.evms?.find((evm) => evm.id === id);
    if (evm) {
      return evm;
    }
  }
  return undefined;
};

/**
 * Finds the mainnet chain or its subnet by ID from the given database.
 *
 * @param {Array<Chain>} db - The database of chains to search through.
 * @param {string} id - The ID of the chain or subnet to find.
 * @returns {Chain | undefined} - The chain containing the subnet with the given ID, or undefined if not found.
 */
const findSubnetMainnet = (db: Array<Chain>, id: string) => {
  for (const chain of db) {
    if (chain.id === id) {
      return chain;
    }
    const consensus = chain.consensus?.find((consensus) => consensus.id === id);
    if (consensus) {
      return chain;
    }
    const testnet = chain.testnets?.find((testnet) => testnet.id === id);
    if (testnet) {
      return chain;
    }
    const evm = chain.evms?.find((evm) => evm.id === id);
    if (evm) {
      return chain;
    }
  }
  return undefined;
};

/**
 * Checks whether a chain is a consensus layer.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainConsensusLayer = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return chain.id.slice(-3).includes('-cl');
};

/**
 * Checks whether a chain is an EVM.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainEVM = (
  db: Array<Chain>,
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  let isEVM = false;
  const mainnet = findSubnetMainnet(db, chain.id);
  if (mainnet) {
    mainnet.evms?.forEach((evm) => {
      if (evm.id === chain.id) {
        isEVM = true;
      }
    });
  }
  return isEVM;
};

/**
 * Checks whether a chain is a testnet.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const isChainTestnet = (
  db: Array<Chain>,
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  let isTestnet = false;
  const mainnet = findSubnetMainnet(db, chain.id);
  if (mainnet) {
    mainnet.testnets?.forEach((testnet) => {
      if (testnet.id === chain.id) {
        isTestnet = true;
      }
    });
  }
  return isTestnet;
};

/**
 * Checks whether a chain has full block support. Chains that use RPC poller only
 * support partial blocks.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
const hasChainFullBlockSupport = (chain: Chain | Testnet | ConsensusLayer) => {
  return chain.is_detailed_blocks;
};

/**
 * Calculates the number of supported chains from a given array of chains.
 *
 * @param {Array<Chain | Testnet | ConsensusLayer | EVM>} chains - The array of chains to check for support.
 * @returns {number} The number of supported chains.
 */
const getNumberOfSupportedChains = (
  chains: Array<Chain | Testnet | ConsensusLayer | EVM>,
) => {
  let supportedChains = 0;
  chains
    .filter((c: any) => isChainSupported(c) || isChainBeta(c))
    .forEach((c: any) => {
      supportedChains++;
      c.consensus?.forEach((consensus: any) => {
        if (isChainSupported(consensus) || isChainBeta(c)) {
          supportedChains++;
        }
      });
      c.evms?.forEach((evm: any) => {
        if (isChainSupported(evm) || isChainBeta(evm)) {
          supportedChains++;
        }
      });
      c.testnets?.forEach((tn: any) => {
        if (isChainSupported(tn) || isChainBeta(tn)) {
          supportedChains++;
        }
      });
    });
  return supportedChains;
};

/**
 * Determines the status of a given chain.
 *
 * @param {Chain | ConsensusLayer | EVM | Testnet} chain - The chain to check the status of.
 * @returns {string} The status of the chain, which can be "supported", "beta", "deprecated", or "coming-soon".
 */
const getChainStatus = (chain: Chain | ConsensusLayer | EVM | Testnet) => {
  if (isChainSupported(chain)) {
    return 'supported';
  }
  if (isChainBeta(chain)) {
    return 'beta';
  }
  if (isChainDeprecated(chain)) {
    return 'deprecated';
  }
  return 'coming-soon';
};

/**
 * Retrieves the supported services for a given chain.
 *
 * @param {Chain | Testnet | ConsensusLayer | EVM} chain - The chain object to check for supported services.
 * @returns {Array<[ServiceID, string | null]>} An array of tuples where each tuple contains a service ID and the release date (beta or full) of the service.
 */
const getSupportedServices = (
  chain: Chain | Testnet | ConsensusLayer | EVM,
) => {
  let supServices = [] as Array<[ServiceID, string | null]>;
  (['rpc', 'firehose', 'substreams', 'datasets'] as Array<ServiceID>).forEach(
    (service) => {
      if (isServiceBeta(chain as any, service as any)) {
        supServices.push([
          service,
          chain.supported_services[
            service as keyof typeof chain.supported_services
          ]?.beta_released_at,
        ]);
      } else if (isServiceSupported(chain as any, service as any)) {
        supServices.push([
          service,
          chain.supported_services[
            service as keyof typeof chain.supported_services
          ]?.full_released_at,
        ]);
      }
    },
  );
  return supServices;
};

/**
 * Retrieves the subnets of a given chain by concatenating its testnets, evms, and consensus arrays.
 *
 * @param {Chain} chain - The chain object containing testnets, evms, and consensus arrays.
 * @returns {Array<any>} - An array containing all subnets from the testnets, evms, and consensus arrays.
 */
const getChainSubnets = (chain: Chain) => {
  return (chain.testnets as Array<any>)
    ?.concat((chain.evms as Array<any>) || [])
    .concat((chain.consensus as Array<any>) || []);
};

const getChainIconUrl = (
  chainIcon: ChainIcon,
  theme: 'dark' | 'light',
  chainId: string,
) => {
  const iconAssetsFolder = '/assets/chains/';

  if (chainIcon?.variants && chainIcon.variants?.includes('branded')) {
    if (chainIcon?.brand_theme === 'both') {
      return `${iconAssetsFolder}${chainId}.branded.svg`;
    } else if (chainIcon.brand_theme === 'light') {
      if (theme === 'light') {
        // TODO: logic for light branded icon on light theme
        return `${iconAssetsFolder}${chainId}.mono.svg`;
      } else {
        return `${iconAssetsFolder}${chainId}.branded.svg`;
      }
    } else {
      if (theme === 'dark') {
        // TODO: logic for dark branded icon on dark theme
        return `${iconAssetsFolder}${chainId}.mono.svg`;
      } else {
        return `${iconAssetsFolder}${chainId}.branded.svg`;
      }
    }
  } else {
    return `${iconAssetsFolder}${chainId}.mono.svg`;
  }
};

export {
  isServiceSupported,
  isServiceBeta,
  isServiceDeprecated,
  isChainSupported,
  isChainBeta,
  isChainDeprecated,
  isChainConsensusLayer,
  isChainEVM,
  isChainTestnet,
  findChainById,
  findSubnetMainnet,
  hasChainFullBlockSupport,
  getNumberOfSupportedChains,
  getChainStatus,
  getSupportedServices,
  getChainSubnets,
  getChainIconUrl,
};
