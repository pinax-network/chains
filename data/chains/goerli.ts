import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { goerli as goerliMeta } from "wagmi/chains";

const id: PinaxId = "goerli";

const chain: ChainFill = {
  id,
  index: 1,
  graph_id: id,
  name: "Goerli",
  alt_names: [],
  mainnet: "eth",
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
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
  metadata: goerliMeta,
};
export default chain;
