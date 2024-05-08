import { Testnet } from '../../../../../types/chain.types';

const meta: Testnet = {
  id: 'goerli',
  graph_id: null,
  name: 'Goerli',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-03-21T00:00:00.000Z',
    },
    substreams: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-03-21T00:00:00.000Z',
    },
    rpc: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-03-21T00:00:00.000Z',
    },
  },
};

export default meta;
