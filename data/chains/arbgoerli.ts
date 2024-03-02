import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "arbgoerli",
  index: 4,
  graph_id: "arbitrum-goerli",
  name: "Arbitrum Goerli",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/arbgoerli`),
  is_img_dt_invert: false,
  mainnet: "arbitrum",
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
