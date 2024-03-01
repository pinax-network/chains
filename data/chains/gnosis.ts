import { Chain } from "@/utils/pinax/types";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import { mainnet as ethMeta } from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.GNOSIS,
  index: 4,
  graph_id: "gnosis",
  name: "Gnosis",
  alt_names: [],
  released_at: "2024-01-18",
  img: "gnosis",
  is_testnet: false,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.GNOSIS,
  img_invert_color_dt: true,
  supported_services: {
    firehose: false,
    substreams: false,
    rpc: false,
  },
  metadata: ethMeta,
};

export default chain;
