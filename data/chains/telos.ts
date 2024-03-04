import { DEFAULT_IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { telos as telosMeta } from "wagmi/chains";

const id: PinaxId = "telos";

const chain: Chain = {
  id,
  index: 4,
  graph_id: undefined,
  name: "Telos",
  alt_names: [],
  mainnet: id,
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: false,
  is_testnet: false,
  supported_services: {
    firehose: {
      released_at: new Date("2023-12-01"),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date("2023-12-01"),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
  metadata: telosMeta,
};

export default chain;
