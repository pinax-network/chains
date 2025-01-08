import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'goerli',
  graph_id: null,
  name: 'Goerli',
  alt_names: [],
  standard: 'evm',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
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
    rpc: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
