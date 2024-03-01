import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";

const chain: Chain = {
  id: Mainnet.KAVA,
  index: 4,
  graph_id: "kava",
  name: "Kava",
  alt_names: [],
  released_at: "2024-01-18",
  img: "kava",
  img_invert_color_dt: false,
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.KAVA,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
