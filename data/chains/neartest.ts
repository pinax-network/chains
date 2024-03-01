import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: "neartest",
  index: 4,
  graph_id: GraphId.NEARTEST,
  name: "Near-testnet",
  alt_names: [],
  released_at: "2023-12-01",
  img: "near",
  is_testnet: true,
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
