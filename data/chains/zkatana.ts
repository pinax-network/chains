import { DEFAULT_IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

// Getting a type error? Run `npm run generate_pinaxid_type`
const id: PinaxId = "zkatana";

const chain: Chain = {
  id,
  index: 5,
  graph_id: undefined,
  name: "Zkatana",
  alt_names: [],
  mainnet: id,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: false,
  is_testnet: false,
  supported_services: {
    firehose: {
      released_at: undefined,
      deprecated_at: undefined,
    },
    substreams: {
      released_at: undefined,
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
};

export default chain;
