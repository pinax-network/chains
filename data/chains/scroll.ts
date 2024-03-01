import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.SCROLL,
  index: 5,
  graph_id: "scroll",
  name: "Scroll",
  alt_names: [],
  released_at: "2024-01-18",
  img: "scroll",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.SCROLL,
  img_invert_color_dt: true,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
