import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'ore',
  graph_id: null,
  name: 'Ore',
  alt_names: [],
  standard: 'antelope',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'ore',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'missing',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    firehose: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
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
  metadata: {
    website: 'https://ore.network/',
  },
};

export default meta;
