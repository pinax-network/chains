import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { mainnet as ethMeta } from "wagmi/chains";

const chain: Chain = {
  id: "eth",
  index: 1,
  graph_id: "mainnet",
  name: "Ethereum",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/eth`),
  is_img_dt_invert: true,
  mainnet: "eth",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: ethMeta,
};
export default chain;
