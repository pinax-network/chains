import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import {
  optimism as optimismMeta,
} from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.OPTIMISM,
  index: 4,
  graph_id: GraphId.OPTIMISM,
  name: "Optimism",
  alt_names: [],
  released_at: "2024-01-01",
  img: "optimism",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.OPTIMISM,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: optimismMeta,
};

export default chain;
