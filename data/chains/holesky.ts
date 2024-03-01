import { Chain } from "@/utils/pinax/types";
import Standard from "../standards";
import BLOCKTYPE from "../../types/block.types";
import Mainnet from "../mainnets";
import { holesky as holeskyMeta } from "wagmi/chains";

const chain: Chain = {
  id: "holesky",
  index: 1,
  graph_id: null,
  name: "Holesky",
  alt_names: [],
  released_at: "2023-12-01",
  img: "eth",
  is_testnet: true,
  standard: Standard.ERC20,
  block_type: BLOCKTYPE.ERC20,
  mainnet: Mainnet.ETHEREUM,
  img_invert_color_dt: true,
  supported_services: {
    firehose: true,
    substreams: true,
    rpc: true,
  },
  metadata: holeskyMeta,
};

export default chain;
