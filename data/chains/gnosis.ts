import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { mainnet as ethMeta } from "wagmi/chains";

const chain: Chain = {
  id: "gnosis",
  index: 4,
  graph_id: "gnosis",
  name: "Gnosis",
  alt_names: [],
  released_at: new Date("2024-01-18"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/gnosis`),
  is_img_dt_invert: true,
  mainnet: "gnosis",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
  metadata: ethMeta,
};

export default chain;
