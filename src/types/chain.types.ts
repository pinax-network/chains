import { BlockType } from './block.types';
import { GraphId } from './graph.types';
import { PinaxId } from './pinax.types';
import { SupportedServices } from './service.types';
import { Standard } from './standard.types';

export type ChainBase = {
  // Testnet ID
  id: PinaxId;

  // Testnet Name
  name: string;

  // The Graph ID
  // See docs/retrieve_graph_ids.md
  graph_id: GraphId | null;

  // Display Priority, lower is higher
  index?: number;

  // Alternative Names
  alt_names: string[];

  // Whether or not the chain supports our existing services
  supported_services: SupportedServices;
};

// Consensus Layers handled like Testnets for now
export type ConsensusLayer = ChainBase;
export type Testnet = ChainBase;

/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
export interface Chain extends ChainBase {
  // Chain Standard (ie. ERC20)
  standard: Standard | null;

  // Block Type
  block_type: BlockType;

  icon: {
    // Token Icon ID
    id: string;

    // Theme of the Icon brand
    brand_theme: 'light' | 'dark' | 'both';

    // Generated by ./scripts/generate/data_json.js
    variants?: Array<'branded' | 'mono'>;
  };

  // Merged by ./scripts/generate/data_json.js
  testnets?: Array<Testnet>;

  // Merged by ./scripts/generate/data_json.js
  consensus_layers?: Array<ConsensusLayer>;

  // Any additional metadata we want to store (ie. Wagmi)
  // metadata: any | null;
}
