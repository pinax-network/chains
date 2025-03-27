import { ___InternalEVM } from '../../../../../../types/chain.types';

const meta: ___InternalEVM = {
  id: 'cardona',
  graph_id: null,
  name: 'Polygon zkEVM Cardona',
  alt_names: ['matic'],
  standard: 'evm',
  is_detailed_blocks: false,
  is_evm_testnet: true,
  is_evm: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-11-15T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-11-15T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-11-15T00:00:00.000Z',
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
};

export default meta;
