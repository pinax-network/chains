import { Chain } from "@/utils/pinax/types";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";

const chain: Chain = {
  id: Mainnet.MOONBEAM,
  index: 5,
  graph_id: "moonbeam",
  name: "Moonbeam",
  alt_names: [],
  released_at: "2024-01-18",
  img: "moonbeam",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.MOONBEAM,
  img_invert_color_dt: false,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
