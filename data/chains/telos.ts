import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { telos as telosMeta } from "wagmi/chains";

const chain: Chain = {
  id: "telos",
  index: 4,
  graph_id: undefined,
  name: "Telos",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/telos`),
  is_img_dt_invert: false,
  mainnet: "telos",
  is_testnet: false,
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: telosMeta,
};

export default chain;
