import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import BLOCKTYPE from "../../types/block.types";
import Standard from "../standards";

const chain: Chain = {
  id: Mainnet.STARKNET,
  index: 4,
  graph_id: "starknet",
  name: "Starknet",
  alt_names: [],
  released_at: "2024-01-18",
  img: "starknet",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.STARKNET,
  img_invert_color_dt: false,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
