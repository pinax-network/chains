import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { mainnet as ethMeta } from "wagmi/chains";

const id: PinaxId = "gnosis";

const chain: ChainFill = {
  id: id,
  index: 4,
  graph_id: id,
  name: "Gnosis",
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
  metadata: ethMeta,
};

export default chain;
