import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "alfajores";

const chain: ChainFill = {
  id,
  index: 4,
  graph_id: undefined,
  name: "Alfajores",
  alt_names: [],
  mainnet: "celo",
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
