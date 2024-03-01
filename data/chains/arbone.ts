import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "arbone",
  index: 4,
  graph_id: "arbone",
  name: "Arbitrum One",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  img: new URL(`${IMG_BASE_URL}/arbone`),
  img_invert_color_dt: false,
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  mainnet: "arbitrum",
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
