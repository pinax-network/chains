import { Chain } from "@/utils/pinax/types";
import Mainnet from "../mainnets";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import { telos as telosMeta } from "wagmi/chains";

const chain: Chain = {
  id: Mainnet.TELOS,
  index: 4,
  graph_id: null,
  name: "Telos",
  alt_names: [],
  released_at: "2023-12-01",
  img: "telos",
  is_testnet: false,
  standard: Standard.ANTELOPE,
  block_type: BLOCKTYPE.ANTELOPE,
  mainnet: Mainnet.TELOS,
  img_invert_color_dt: false,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: false,
  },
  metadata: telosMeta,
};

export default chain;
