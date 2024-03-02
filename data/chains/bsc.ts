import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { bsc as bscMeta } from "wagmi/chains";

const chain: Chain = {
  id: "bsc",
  index: 2,
  graph_id: "bsc",
  name: "BNB",
  alt_names: ["bsc", "binance"],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/bsc`),
  is_img_dt_invert: false,
  mainnet: "bsc",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: bscMeta,
};

export default chain;
