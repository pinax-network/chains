import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "wax",
  index: 4,
  graph_id: undefined,
  name: "WAX Test",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/wax`),
  is_img_dt_invert: false,
  mainnet: "wax",
  is_testnet: true,
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
};

export default chain;
