import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "alfajores",
  index: 4,
  graph_id: "alfajores",
  name: "Alfajores",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  deprecated_at: null,
  img: new URL(`${IMG_BASE_URL}/alfajores`),
  img_invert_color_dt: true,
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  mainnet: "alfajores",
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
