import type { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'scrsepolia',
  graph_id: 'scroll-sepolia',
  name: 'Scroll Sepolia',
  alt_names: [],
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
      full_released_at: '2024-12-04T00:00:00.000Z',
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
      full_released_at: '2024-12-04T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-11-21T00:00:00.000Z',
      full_released_at: '2024-12-04T00:00:00.000Z',
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
};

export default meta;
