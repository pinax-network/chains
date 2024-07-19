import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'litecoin',
  name: 'Litecoin',
  alt_names: ['LTC'],
  graph_id: null,
  standard: 'ltc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.litecoin.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-litecoin/docs/main:sf.litecoin.type.v1',
  },
  icon: {
    id: 'tokens/ltc',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'beta',
    substreams: 'beta',
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L1',
    website: 'https://litecoin.org/',
  },
};

export default meta;
