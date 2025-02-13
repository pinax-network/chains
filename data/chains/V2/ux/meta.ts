import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'ux',
  graph_id: null,
  name: 'UX',
  alt_names: [],
  standard: 'antelope',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'networks/ux',
    brand_theme: 'both',
    variants: ['branded'],
    type: 'missing',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2023-12-01T00:00:00.000Z',
      full_released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-01-15T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2023-12-01T00:00:00.000Z',
      full_released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-01-15T00:00:00.000Z',
    },
    rpc: {
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
  metadata: {
    website: '',
  },
};

export default meta;
