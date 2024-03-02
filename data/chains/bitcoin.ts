import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "bitcoin",
  index: 2,
  graph_id: undefined,
  name: "Bitcoin",
  alt_names: ["btc"],
  released_at: new Date("2023-12-21"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/bitcoin`),
  is_img_dt_invert: false,
  mainnet: "bitcoin",
  is_testnet: false,
  standard: "brc20",
  block_type: BLOCKTYPE.brc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
