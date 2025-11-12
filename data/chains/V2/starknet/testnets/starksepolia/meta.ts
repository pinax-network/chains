import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'starksepolia',
  graph_id: null,
  name: 'Starknet Sepolia',
  alt_names: [],
  standard: 'starknet',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-12T00:00:00.000Z',
    },
    firehose: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: '2025-11-12T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
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
};

export default meta;
