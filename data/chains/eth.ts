import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { mainnet as ethMeta } from "wagmi/chains";

const id: PinaxId = "eth";

const chain: ChainFill = {
  id,
  index: 1,
  graph_id: "mainnet",
  name: "Ethereum",
  alt_names: [],
  mainnet: id,
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
  metadata: ethMeta,
};
export default chain;
