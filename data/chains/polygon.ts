import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import GraphId from "../graphids";
import BLOCKTYPE from "../../types/block.types";
import Standard from "../standards";
import {
  polygon as polygonMeta,
} from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.POLYGON,
  index: 3,
  graph_id: GraphId.POLYGON,
  name: "Polygon",
  alt_names: ["matic"],
  released_at: "2023-12-01",
  img: "polygon",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.POLYGON,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: polygonMeta,
};

export default chain;
