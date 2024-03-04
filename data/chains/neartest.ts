import { DEFAULT_IMG_BASE_URL } from '../../configs';
import { Chain } from '../../types/chain.types';
import { PinaxId } from '../../types/pinax.types';
import BLOCKTYPE from '../blocktypes';

// Getting a type error? Run `npm run generate_pinaxid_type`
const id: PinaxId = 'neartest';

const chain: Chain = {
  id,
  index: 4,
  graph_id: 'near-testnet',
  name: 'Near-testnet',
  alt_names: [],
  mainnet: 'near',
  standard: 'near',
  block_type: BLOCKTYPE.near,
  img: new URL(`${DEFAULT_IMG_BASE_URL}/${id}.svg`),
  is_img_dt_invert: true,
  is_testnet: true,
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
      released_at: undefined,
      deprecated_at: undefined,
    },
  },
};

export default chain;
