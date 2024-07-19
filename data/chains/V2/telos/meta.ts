import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'telos',
  graph_id: null,
  name: 'Telos',
  alt_names: [],
  standard: 'antelope',
  rpc_poller: false,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'networks/telos',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://telos.net/',
  },
};

export default meta;
