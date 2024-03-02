import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { optimism as optimismMeta } from "wagmi/chains";

const chain: Chain = {
  id: "optimism",
  index: 4,
  graph_id: "optimism",
  name: "Optimism",
  alt_names: [],
  released_at: new Date("2024-01-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/optimism`),
  is_img_dt_invert: false,
  mainnet: "optimism",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: optimismMeta,
};

export default chain;
