import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "chapel",
  index: 2,
  graph_id: "chapel",
  name: "Chapel",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/bsc`),
  is_img_dt_invert: false,
  mainnet: "bsc",
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
};

export default chain;
