import { ConsensusLayerServiceID, ServiceID } from '../types';
import { Chain, ConsensusLayer, EVM, Testnet } from '../types/chain.types';
/**
 * Checks whether a service is fully supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceSupported: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean | undefined;
/**
 * Checks whether a service is in beta.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceBeta: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean | undefined;
/**
 * Checks whether a service was once supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceDeprecated: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean | undefined;
/**
 * Checks whether any service is fully supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainSupported: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean | undefined;
/**
 * Checks whether any service is in beta for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainBeta: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean | undefined;
/**
 * Checks whether any service was once supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainDeprecated: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean | undefined;
/**
 * Checks whether a chain is a consensus layer.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainConsensusLayer: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Finds a chain by its ID by scanning mainnets, consensus layers, testnets and EVMs.
 * Returns first match.
 *
 * @param db Array of Chains
 * @param id Chain ID
 *
 * @returns Chain, Testnet or ConsensusLayer
 */
declare const findChainById: (
  db: Array<Chain>,
  id: string,
) => Chain | Testnet | ConsensusLayer | EVM | undefined;
/**
 * Checks whether a chain has full block support. Chains that use RPC poller only
 * support partial blocks.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const hasChainFullBlockSupport: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
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
//# sourceMappingURL=chains.d.ts.map
