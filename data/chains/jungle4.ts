import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "jungle4",
  index: 4,
  graph_id: undefined,
  name: "Jungle4",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/eos`),
  is_img_dt_invert: true,
  mainnet: "eos",
  is_testnet: true,
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
};

export default chain;
