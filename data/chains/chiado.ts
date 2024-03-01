import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";

const chain: Chain = {
  id: "chiado",
  index: 10,
  graph_id: null,
  name: "Chiado",
  alt_names: [],
  released_at: "2999-01-18",
  img: "chiado",
  img_invert_color_dt: false,
  is_testnet: false,
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
