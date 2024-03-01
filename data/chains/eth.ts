import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import GraphId from "../graphids";
import Mainnet from "../mainnets";
import Standard from "../standards";
import { mainnet as ethMeta } from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.ETHEREUM,
  index: 1,
  graph_id: GraphId.ETHEREUM,
  name: "Ethereum",
  alt_names: [],
  released_at: "2023-12-01",
  img: "eth",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.ETHEREUM,
  img_invert_color_dt: true,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: ethMeta,
};
export default chain;
