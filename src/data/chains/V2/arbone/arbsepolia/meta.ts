import { Testnet } from '../../../../../types/chain.types';

const meta: Testnet = {
  id: 'arbsepolia',
  graph_id: 'arbitrum-sepolia',
  name: 'Arbitrum Sepolia',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: '2024-05-03T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
