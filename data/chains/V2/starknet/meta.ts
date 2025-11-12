import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'starknet',
  graph_id: 'starknet-mainnet',
  name: 'Starknet',
  alt_names: [],
  standard: 'starknet',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'starknet',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-12T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-12T00:00:00.000Z',
    },
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-12T00:00:00.000Z',
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
    website: 'https://www.starknet.io/',
  },
};

export default meta;
