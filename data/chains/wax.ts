import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.WAX,
  index: 4,
  graph_id: null,
  name: "WAX",
  alt_names: [],
  released_at: "2023-12-01",
  img: "wax",
  is_testnet: false,
  standard: Standard.ANTELOPE,
  block_type: BLOCKTYPE.ANTELOPE,
  mainnet: Mainnet.WAX,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
