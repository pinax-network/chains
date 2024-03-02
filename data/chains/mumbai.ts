import { IMG_BASE_URL } from "../../configs";
import { Chain } from "../../types/chain.types";
import BLOCKTYPE from "../blocktypes";
import { polygonMumbai as polygonMumbaiMeta } from "wagmi/chains";

const chain: Chain = {
  id: "mumbai",
  index: 3,
  graph_id: "mumbai",
  name: "Mumbai",
  alt_names: [],
  released_at: new Date("2023-12-01"),
  deprecated_at: undefined,
  img: new URL(`${IMG_BASE_URL}/polygon`),
  is_img_dt_invert: false,
  mainnet: "polygon",
  is_testnet: true,
  standard: "erc20",
  block_type: BLOCKTYPE.erc20,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: polygonMumbaiMeta,
};

export default chain;
