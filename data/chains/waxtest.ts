import { Chain } from "@/utils/pinax/types";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: "waxtest",
  index: 4,
  graph_id: null,
  name: "WAX Test",
  alt_names: [],
  released_at: "2023-12-01",
  img: "wax",
  is_testnet: true,
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
