import { BlockType } from "./block.types";
import { GraphId } from "./graph.types";
import { Mainnet } from "./mainnet.types";
import { PinaxId } from "./pinax.types";
import { SupportedServices } from "./service.types";
import { NoExtraProperties } from "./util.types";
import { Standard } from "./standard.types";

export type NoExtraPropertiesChain = NoExtraProperties<Chain>;

export type Chain = {
  // Pinax ID
  id: PinaxId; // TODO: CIRCULAR DEPENDENCY UNTIL PINAXID IS GENERATED

  // Verbose Name
  name: string;

  // Display Priority
  index: number;

  // Alternative Names
  alt_names: string[];

  // Official Pinax Release Date
  released_at: Date;

  // Deprecated Date (if applicable)
  deprecated_at?: Date;

  // Logo URL
  img: URL;

  // Invert Logo Color on Dark Theme
  is_img_dt_invert: boolean;

  // Mainnet ID
  mainnet: Mainnet;

  // Redundant with mainnet, but useful for filtering
  is_testnet: boolean;

  // Block Type
  block_type: BlockType;

  // Whether or not the chain supports our existing services
  supported_services: SupportedServices;

  // The Graph ID
  // See graph.types.ts for instructions on how to retrieve Graph IDs
  graph_id?: GraphId;

  // Chain Standard (ie. ERC20)
  standard?: Standard;

  // Any additional metadata we want to store (ie. Wagmi)
  metadata?: any;
};
