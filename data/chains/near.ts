import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.NEAR,
  index: 4,
  graph_id: GraphId.NEAR,
  name: "Near",
  alt_names: [],
  released_at: "2023-12-01",
  img: "near",
  is_testnet: false,
  standard: Standard.NEAR,
  block_type: BLOCKTYPE.NEAR,
  mainnet: Mainnet.NEAR,
  img_invert_color_dt: true,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
