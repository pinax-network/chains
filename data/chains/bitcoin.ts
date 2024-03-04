import { DEFAULT_IMG_BASE_URL } from '../../configs';
import { Chain } from '../../types/chain.types';
import { PinaxId } from '../../types/pinax.types';
import BLOCKTYPE from '../blocktypes';

// Getting a type error? Run `npm run generate_pinaxid_type`
const id: PinaxId = 'bitcoin';

const chain: Chain = {
  id,
  index: 2,
  graph_id: undefined,
  name: 'Bitcoin',
  alt_names: ['btc'],
  mainnet: id,
  standard: 'brc20',
  block_type: BLOCKTYPE.brc20,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: false,
  is_testnet: false,
  supported_services: {
    firehose: {
      released_at: new Date('2023-12-21'),
      deprecated_at: undefined,
    },
    substreams: {
      released_at: new Date('2023-12-21'),
      deprecated_at: undefined,
    },
    rpc: {
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
};

export default chain;
