import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";

const chain: Chain = {
  id: Mainnet.CELO,
  index: 2,
  graph_id: "celo",
  name: "Celo",
  alt_names: [],
  released_at: "2024-01-18",
  img: "celo",
  img_invert_color_dt: true,
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.CELO,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
