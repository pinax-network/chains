import { Chain } from "@/utils/pinax/types";
import GraphId from "../graphids";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import {
  polygonMumbai as polygonMumbaiMeta,
} from "wagmi/chains";

const chain: Chain = {
  id: "mumbai",
  index: 3,
  graph_id: GraphId.MUMBAI,
  name: "Mumbai",
  alt_names: [],
  released_at: "2023-12-01",
  img: "polygon",
  is_testnet: true,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.POLYGON,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: polygonMumbaiMeta
};

export default chain;
