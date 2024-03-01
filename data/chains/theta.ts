import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: "theta",
  index: 4,
  graph_id: GraphId.THETA,
  name: "Theta",
  alt_names: [],
  released_at: "2023-12-01",
  img: "cosmoshub",
  is_testnet: true,
  standard: Standard.COSMOS,
  block_type: BLOCKTYPE.COSMOS,
  mainnet: Mainnet.COSMOS,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;
