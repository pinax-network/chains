import { ChainFill } from "../../types/chain.types";
import { PinaxId } from "../../types/pinax.types";
import BLOCKTYPE from "../blocktypes";
import { polygonMumbai as polygonMumbaiMeta } from "wagmi/chains";

const id: PinaxId = "mumbai";

const chain: ChainFill = {
  id,
  index: 3,
  graph_id: id,
  name: "Mumbai",
  alt_names: [],
  mainnet: "polygon",
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
  metadata: polygonMumbaiMeta,
};

export default chain;
