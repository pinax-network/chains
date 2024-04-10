import { Testnet } from '../../../../types/chain.types';

const meta: Testnet = {
  id: 'sepolia',
  graph_id: 'sepolia',
  name: 'Sepolia',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
