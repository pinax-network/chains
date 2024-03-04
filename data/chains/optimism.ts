import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { optimism as optimismMeta } from "wagmi/chains";

const id: PinaxId = "optimism";

const chain: ChainFill = {
  id,
  index: 4,
  graph_id: id,
  name: "Optimism",
  alt_names: [],
  mainnet: id,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: {
      released_at: new Date("2024-01-01"),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date("2024-01-01"),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
  metadata: optimismMeta,
};

export default chain;
