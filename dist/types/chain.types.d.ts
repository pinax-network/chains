import { BlockType } from './block.types';
import { GraphID } from './graph.types';
import { PinaxID } from './pinax.types';
import {
  ___InternalConsensusLayerServices,
  ___InternalSupportedServices,
  ConsensusLayerServices,
  SupportedServices,
} from './service.types';
import { Standard } from './standard.types';
export type ChainBase = {
  id: PinaxID;
  name: string;
  alt_names: string[];
  graph_id: GraphID | null;
  index?: number;
  standard: Standard | null;
  is_detailed_blocks: boolean;
  block_type: BlockType;
};
export type ___InternalTestnet = ChainBase & {
  supported_services: ___InternalSupportedServices;
  metadata?: {
    deprecated_replacing_chain?: PinaxID;
  };
};
export type ___InternalConsensusLayer = ChainBase & {
  supported_services: ___InternalConsensusLayerServices;
};
export type ___InternalEVM = ChainBase & {
  supported_services: ___InternalSupportedServices;
};
/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
export interface ___InternalChain extends ChainBase {
  icon: {
    id: string;
    brand_theme: 'light' | 'dark' | 'both';
    variants?: Array<'branded' | 'mono'>;
  };
  supported_services: ___InternalSupportedServices;
  testnets?: Array<___InternalTestnet>;
  consensus?: Array<___InternalConsensusLayer>;
  evms?: Array<___InternalEVM>;
  metadata?: {
    layer?: 'L0' | 'L1' | 'L2' | 'L3';
    website?: string;
    mainchain_id?: PinaxID | string;
    tags?: string[];
    deprecated_replacing_chain?: PinaxID;
  };
}
export type Testnet = ChainBase & {
  supported_services: SupportedServices;
  metadata?: {
    deprecated_replacing_chain?: PinaxID;
  };
};
export type ConsensusLayer = ChainBase & {
  supported_services: ConsensusLayerServices;
};
export type EVM = ChainBase & {
  supported_services: SupportedServices;
};
/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
export interface Chain extends ChainBase {
  icon: {
    id: string;
    brand_theme: 'light' | 'dark' | 'both';
    variants?: Array<'branded' | 'mono'>;
  };
  supported_services: SupportedServices;
  testnets?: Array<Testnet>;
  consensus?: Array<ConsensusLayer>;
  evms?: Array<EVM>;
  metadata?: {
    layer?: 'L0' | 'L1' | 'L2' | 'L3';
    website?: string;
    mainchain_id?: PinaxID | string;
    tags?: string[];
    deprecated_replacing_chain?: PinaxID;
  };
}
//# sourceMappingURL=chain.types.d.ts.map
