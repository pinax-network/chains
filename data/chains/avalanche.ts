import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.AVALANCHE,
  index: 3,
  graph_id: "avalanche",
  name: "Avalanche",
  alt_names: [],
  released_at: "2024-01-18",
  img: "avalanche",
  img_invert_color_dt: true,
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.AVALANCHE,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
