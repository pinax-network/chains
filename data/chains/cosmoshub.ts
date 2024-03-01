import BLOCKTYPE from "../../types/block.types";
import GraphId from "../graphids";
import Mainnet from "../mainnets";
import Standard from "../standards";

const chain = {
  id: Mainnet.COSMOS,
  index: 4,
  graph_id: GraphId.COSMOS,
  name: "Cosmos Hub",
  alt_names: [],
  released_at: "2023-12-01",
  img: "cosmoshub",
  img_invert_color_dt: false,
  is_testnet: false,
  standard: Standard.COSMOS,
  block_type: BLOCKTYPE.COSMOS,
  mainnet: Mainnet.COSMOS,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;
