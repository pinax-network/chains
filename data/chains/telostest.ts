import { Chain } from "@/utils/pinax/types";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import { telosTestnet as telosTestnetMeta } from "wagmi/chains";

const chain: Chain = {
  id: "telostest",
  index: 4,
  graph_id: null,
  name: "Telos Test",
  alt_names: [],
  released_at: "2023-12-01",
  img: "telos",
  is_testnet: true,
  standard: Standard.ANTELOPE,
  block_type: BLOCKTYPE.ANTELOPE,
  mainnet: Mainnet.TELOS,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: telosTestnetMeta,
};

export default chain;
