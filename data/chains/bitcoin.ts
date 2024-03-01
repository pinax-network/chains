import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";

const chain: Chain = {
  id: Mainnet.BITCOIN,
  index: 2,
  graph_id: null,
  name: "Bitcoin",
  alt_names: ["btc"],
  released_at: "2023-12-21",
  img: "bitcoin",
  img_invert_color_dt: false,
  is_testnet: false,
  standard: Standard.BRC20,
  block_type: BLOCKTYPE.BRC20,
  mainnet: Mainnet.BITCOIN,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
