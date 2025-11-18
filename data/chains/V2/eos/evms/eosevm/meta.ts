import type { ___InternalEVM } from '../../../../../../types/chain.types';

const meta: ___InternalEVM = {
  id: 'eosevm',
  graph_id: null,
  name: 'EOS EVM',
  alt_names: [],
  standard: 'evm',
  is_detailed_blocks: true,
  is_evm: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2025-08-08T00:00:00.000Z',
      deprecated_at: '2025-08-08T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2025-08-08T00:00:00.000Z',
      deprecated_at: '2025-08-08T00:00:00.000Z',
    },
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2025-08-08T00:00:00.000Z',
      deprecated_at: '2025-08-08T00:00:00.000Z',
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
