import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'arbgoerli',
  graph_id: null,
  name: 'Arbitrum Goerli',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-05-03T00:00:00.000Z',
      full_released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: '2024-05-03T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-05-03T00:00:00.000Z',
      full_released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: '2024-05-03T00:00:00.000Z',
    },
    rpc: {
      beta_released_at: '2024-05-03T00:00:00.000Z',
      full_released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: '2024-05-03T00:00:00.000Z',
    },
  },
};

export default meta;
