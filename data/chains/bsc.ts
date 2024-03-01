import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import GraphId from "../graphids";
import Mainnet from "../mainnets";
import Standard from "../standards";
import { bsc as bscMeta } from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.BSC,
  index: 2,
  graph_id: GraphId.BSC,
  name: "BNB",
  alt_names: ["bsc", "binance"],
  released_at: "2023-12-01",
  img: "bsc",
  img_invert_color_dt: false,
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.BSC,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: bscMeta,
};

export default chain;