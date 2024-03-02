import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "chiado",
  index: 10,
  graph_id: undefined,
  name: "Chiado",
  alt_names: [],
  released_at: new Date("2999-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/chiado`),
  is_img_dt_invert: false,
  mainnet: "arbitrum",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
};

export default chain;
