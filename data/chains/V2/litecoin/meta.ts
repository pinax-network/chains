import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'litecoin',
  name: 'Litecoin',
  alt_names: ['LTC'],
  graph_id: null,
  standard: 'ltc20',
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
    rpc: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    firehose: {
      beta: {
        released_at: '2024-05-14T00:00:00Z',
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2024-05-14T00:00:00Z',
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
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
