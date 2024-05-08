import { Testnet } from '../../../../../types/chain.types';

const meta: Testnet = {
  id: 'mumbai',
  graph_id: null,
  name: 'Mumbai',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-04-12T00:00:00.000Z',
    },
    substreams: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-04-12T00:00:00.000Z',
    },
    rpc: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-04-12T00:00:00.000Z',
    },
  },
};

export default meta;
