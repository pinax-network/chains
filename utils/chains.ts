import {
  ConsensusLayerServiceID,
  ServiceID,
  ServiceStatusDates,
} from '../types';
import {
  Chain,
  ChainBase,
  ConsensusLayer,
  EVM,
  Testnet,
} from '../types/chain.types';

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
) => {
  // @ts-ignore
  const serviceStatusDates = chain.supported_services[service] as
    | ServiceStatusDates
    | undefined;
  return (
    serviceStatusDates &&
    serviceStatusDates.full_released_at !== null &&
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
    isServiceSupported(chain, 'rpc')
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
    isServiceBeta(chain, 'firehose') ||
    isServiceBeta(chain, 'substreams') ||
    isServiceBeta(chain, 'rpc')
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
    isServiceDeprecated(chain, 'rpc')
  );
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

export {
  isServiceSupported,
  isServiceBeta,
  isServiceDeprecated,
  isChainSupported,
  isChainBeta,
  isChainDeprecated,
  isChainConsensusLayer,
  findChainById,
  hasChainFullBlockSupport,
};
