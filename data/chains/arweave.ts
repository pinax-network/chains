import { DEFAULT_IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "arweave";

const chain: Chain = {
  id,
  index: 4,
  graph_id: "arweave-mainnet",
  name: "Arweave",
  alt_names: [],
  mainnet: id,
  standard: "erc20",
  block_type: BLOCKTYPE.arweave,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: true,
  is_testnet: false,
  supported_services: {
    firehose: {
      released_at: new Date("2023-12-01"),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date("2024-03-03"),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
};

export default chain;
