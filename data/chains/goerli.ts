import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import { goerli as goerliMeta } from "wagmi/chains";

const chain: Chain = {
  id: "goerli",
  index: 1,
  graph_id: GraphId.GOERLI,
  name: "Goerli",
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
  metadata: goerliMeta,
};
export default chain;
