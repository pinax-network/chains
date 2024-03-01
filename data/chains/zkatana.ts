import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.ZKATANA,
  index: 5,
  graph_id: "zkatana",
  name: "Zkatana",
  alt_names: [],
  released_at: "2024-01-18",
  img: "zkatana",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.ZKATANA,
  img_invert_color_dt: false,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
