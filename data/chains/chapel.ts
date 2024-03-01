import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: "chapel",
  index: 2,
  graph_id: GraphId.CHAPEL,
  name: "Chapel",
  alt_names: [],
  released_at: "2023-12-01",
  img: "bsc",
  img_invert_color_dt: false,
  is_testnet: true,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.BSC,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
};

export default chain;
