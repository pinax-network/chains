import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { telosTestnet as telosTestnetMeta } from "wagmi/chains";

const chain: Chain = {
  id: "telostest",
  index: 4,
  graph_id: undefined,
  name: "Telos Test",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/telos`),
  is_img_dt_invert: false,
  mainnet: "telos",
  is_testnet: true,
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: telosTestnetMeta,
};

export default chain;
