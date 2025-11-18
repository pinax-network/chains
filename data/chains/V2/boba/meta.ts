import type { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'boba',
  name: 'Boba Network',
  alt_names: [],
  graph_id: 'boba',
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'boba',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-17T00:00:00.000Z',
    },
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-17T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-17T00:00:00.000Z',
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
    layer: 'L2',
    website: 'https://boba.network/',
  },
};

export default meta;
