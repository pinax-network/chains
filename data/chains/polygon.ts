import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { polygon as polygonMeta } from "wagmi/chains";

const id: PinaxId = "polygon";

const chain: ChainFill = {
  id,
  index: 3,
  graph_id: "matic",
  name: "Polygon",
  alt_names: ["matic"],
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
  metadata: polygonMeta,
};

export default chain;
