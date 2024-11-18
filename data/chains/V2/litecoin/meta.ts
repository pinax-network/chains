import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'litecoin',
  name: 'Litecoin',
  alt_names: ['LTC'],
  graph_id: null,
  standard: 'ltc20',
  is_detailed_blocks: false,
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
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-11-19T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-11-19T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
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
