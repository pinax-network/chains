import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { polygon as polygonMeta } from "wagmi/chains";

const chain: Chain = {
  id: "polygon",
  index: 3,
  graph_id: "matic",
  name: "Polygon",
  alt_names: ["matic"],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/polygon`),
  is_img_dt_invert: false,
  mainnet: "polygon",
  is_testnet: false,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: polygonMeta,
};

export default chain;
