import { ___InternalEVM } from '../../../../../../types/chain.types';

const meta: ___InternalEVM = {
  id: 'jungle4evm',
  graph_id: null,
  name: 'Jungle4 EVM',
  alt_names: [],
  standard: 'erc20',
  is_detailed_blocks: true,
  is_evm_testnet: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2023-09-20T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2023-09-20T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2023-09-20T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
