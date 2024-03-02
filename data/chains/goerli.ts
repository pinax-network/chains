import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { goerli as goerliMeta } from "wagmi/chains";

const chain: Chain = {
  id: "goerli",
  index: 1,
  graph_id: "goerli",
  name: "Goerli",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/eth`),
  is_img_dt_invert: true,
  mainnet: "eth",
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: goerliMeta,
};
export default chain;
