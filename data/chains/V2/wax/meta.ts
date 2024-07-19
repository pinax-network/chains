import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'wax',
  graph_id: null,
  name: 'WAX',
  alt_names: [],
  standard: 'antelope',
  rpc_poller: false,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'tokens/waxp',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://wax.io/',
  },
};

export default meta;
