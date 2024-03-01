import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";

const chain: Chain = {
  id: "arbsepolia",
  index: 4,
  graph_id: "arbsepolia",
  name: "Arbitrum Sepolia",
  alt_names: [],
  released_at: "2024-01-18",
  img: "arbsepolia",
  img_invert_color_dt: false,
  is_testnet: true,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.ARBITRUM,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
