import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.OSMOSIS,
  index: 4,
  graph_id: GraphId.OSMOSIS,
  name: "Osmosis",
  alt_names: [],
  released_at: "2023-12-01",
  img: "osmosis",
  is_testnet: false,
  standard: Standard.COSMOS,
  block_type: BLOCKTYPE.COSMOS,
  mainnet: Mainnet.OSMOSIS,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;
