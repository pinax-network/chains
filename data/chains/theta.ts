import { DEFAULT_IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

// Getting a type error? Run `npm run generate_pinaxid_type`
const id: PinaxId = "theta";

const chain: Chain = {
  id,
  index: 4,
  graph_id: "theta-testnet-001",
  name: "Theta",
  alt_names: [],
  mainnet: "cosmoshub",
  standard: "cosmos",
  block_type: BLOCKTYPE.cosmos,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: false,
  is_testnet: true,
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
};

export default chain;
