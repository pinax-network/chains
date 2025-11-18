import type { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'tron',
  name: 'Tron',
  alt_names: [],
  graph_id: null,
  standard: 'tron',
  is_detailed_blocks: true,
  block_type: {
    label: '',
    url: '',
  },
  icon: {
    id: 'tron',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2025-08-28T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    api: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    website: 'https://tron.network/',
  },
};

export default meta;
