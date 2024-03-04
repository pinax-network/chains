import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";

const id: PinaxId = "bitcoin";

const chain: ChainFill = {
  id,
  index: 2,
  graph_id: undefined,
  name: "Bitcoin",
  alt_names: ["btc"],
  mainnet: id,
  standard: "brc20",
  block_type: BLOCKTYPE.brc20,
  supported_services: {
    firehose: {
      released_at: new Date("2023-12-21"),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date("2023-12-21"),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
};

export default chain;
