import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "near",
  index: 4,
  graph_id: "near-mainnet",
  name: "Near",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/near`),
  is_img_dt_invert: true,
  mainnet: "near",
  is_testnet: false,
  standard: "near",
  block_type: BLOCKTYPE.near,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
