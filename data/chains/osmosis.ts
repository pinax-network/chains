import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "osmosis",
  index: 4,
  graph_id: "osmosis-1",
  name: "Osmosis",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/osmosis`),
  is_img_dt_invert: false,
  mainnet: "osmosis",
  is_testnet: false,
  standard: "cosmos",
  block_type: BLOCKTYPE.cosmos,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;
