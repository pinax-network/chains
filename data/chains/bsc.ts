import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { bsc as bscMeta } from "wagmi/chains";

const id: PinaxId = "bsc";

const chain: ChainFill = {
  id,
  index: 2,
  graph_id: id,
  name: "BNB",
  alt_names: ["bsc", "binance"],
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
  metadata: bscMeta,
};

export default chain;
