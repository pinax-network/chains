import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";

const chain: Chain = {
  id: "arweave",
  index: 4,
  graph_id: "arweave-mainnet",
  name: "Arweave",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/arweave`),
  is_img_dt_invert: true,
  mainnet: "arweave",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.arweave,
  supported_services: {
    firehose: true,
    substreams: false,
    rpc: false,
  },
};

export default chain;
