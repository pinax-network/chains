import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.FANTOM,
  index: 4,
  graph_id: "fantom",
  name: "Fantom",
  alt_names: [],
  released_at: "2024-01-18",
  img: "fantom",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.FANTOM,
  img_invert_color_dt: true,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
