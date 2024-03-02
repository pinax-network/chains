import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "fantom",
  index: 4,
  graph_id: "fantom",
  name: "Fantom",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/fantom`),
  is_img_dt_invert: true,
  mainnet: "fantom",
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
