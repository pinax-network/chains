import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "jungle4";

const chain: ChainFill = {
  id,
  index: 4,
  graph_id: undefined,
  name: "Jungle4",
  alt_names: [],
  mainnet: "eos",
  standard: "antelope",
  block_type: BLOCKTYPE.antelope,
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
