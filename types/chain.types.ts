import { BlockType } from './block.types';
import { GraphId } from './graph.types';
import { Mainnet } from './mainnet.types';
import { PinaxId } from './pinax.types';
import { SupportedServices } from './service.types';
import { Standard } from './standard.types';

/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
export type Chain = {
  // Pinax ID
  id: PinaxId;

  // Verbose Name
  name: string;

  // The Graph ID
  // See graph.types.ts for instructions on how to retrieve Graph IDs
  graph_id: GraphId | null;

  // Display Priority
  index: number;

  // Alternative Names
  alt_names: string[];

  // Mainnet ID
  mainnet: Mainnet;

  // Chain Standard (ie. ERC20)
  standard: Standard | null;

  // Block Type
  block_type: BlockType;

  // Image URL
  img: string;

  // Whether or not the image should be inverted
  is_img_dt_invert: boolean;

  // Whether or not the chain is a testnet
  is_testnet: boolean;

  // Whether or not the chain supports our existing services
  supported_services: SupportedServices;

  // Any additional metadata we want to store (ie. Wagmi)
  // metadata: any | null;
};
