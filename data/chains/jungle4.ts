import { Chain } from "@/utils/pinax/types";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: "jungle4",
  index: 4,
  graph_id: null,
  name: "Jungle4",
  alt_names: [],
  released_at: "2023-12-01",
  img: "eos",
  is_testnet: true,
  standard: Standard.ANTELOPE,
  block_type: BLOCKTYPE.ANTELOPE,
  mainnet: Mainnet.EOS,
  img_invert_color_dt: true,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
};

export default chain;
