import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "cosmoshub";

const chain: ChainFill = {
  id,
  index: 4,
  graph_id: "cosmoshub-4",
  name: "Cosmos Hub",
  alt_names: [],
  mainnet: id,
  standard: "cosmos",
  block_type: BLOCKTYPE.cosmos,
  supported_services: {
    firehose: {
      released_at: new Date("2023-12-01"),
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
