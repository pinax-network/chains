import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "moonbeam",
  index: 5,
  graph_id: "moonbeam",
  name: "Moonbeam",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/moonbeam`),
  is_img_dt_invert: false,
  mainnet: "moonbeam",
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
