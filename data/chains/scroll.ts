import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "scroll";

const chain: ChainFill = {
  id,
  index: 5,
  graph_id: id,
  name: "Scroll",
  alt_names: [],
  mainnet: id,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
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
