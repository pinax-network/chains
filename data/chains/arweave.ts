import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import GraphId from "../graphids";

const chain: Chain = {
  id: Mainnet.ARWEAVE,
  index: 4,
  graph_id: GraphId.ARWEAVE,
  name: "Arweave",
  alt_names: [],
  released_at: "2023-12-01",
  img: "arweave",
  img_invert_color_dt: true,
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ARWEAVE,
  mainnet: Mainnet.ARWEAVE,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;