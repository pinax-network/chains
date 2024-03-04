import { DEFAULT_IMG_BASE_URL } from '../../configs';
import { Chain } from '../../types/chain.types';
import { PinaxId } from '../../types/pinax.types';
import BLOCKTYPE from '../blocktypes';
import { bsc as bscMeta } from 'wagmi/chains';

// Getting a type error? Run `npm run generate_pinaxid_type`
const id: PinaxId = 'bsc';

const chain: Chain = {
  id,
  index: 2,
  graph_id: id,
  name: 'BNB',
  alt_names: ['bsc', 'binance'],
  mainnet: id,
  standard: 'erc20',
  block_type: BLOCKTYPE.erc20,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: false,
  is_testnet: false,
  supported_services: {
    firehose: {
      released_at: new Date('2023-12-01'),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date('2023-12-01'),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: new Date('2023-12-01'),
      deprecated_at: undefined,
    },
  },
  metadata: bscMeta,
};

export default chain;
