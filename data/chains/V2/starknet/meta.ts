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
    id: 'networks/starknet',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
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
