import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import { sepolia as sepoliaMeta } from "wagmi/chains";

const chain: Chain = {
  id: "sepolia",
  index: 1,
  graph_id: GraphId.SEPOLIA,
  name: "Sepolia",
  alt_names: [],
  released_at: "2023-12-01",
  img: "eth",
  is_testnet: true,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.ETHEREUM,
  img_invert_color_dt: true,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: sepoliaMeta,
};

export default chain;