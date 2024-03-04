import { DEFAULT_IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "chapel";

const chain: Chain = {
  id,
  index: 2,
  graph_id: "chapel",
  name: "Chapel",
  alt_names: [],
  mainnet: "bsc",
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
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
      released_at: new Date("2023-12-01"),
      deprecated_at: undefined,
    },
  },
};

export default chain;
