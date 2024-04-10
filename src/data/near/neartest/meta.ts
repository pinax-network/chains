import { Testnet } from '../../../types/chain.types';

const meta: Testnet = {
  id: 'neartest',
  graph_id: 'near-testnet',
  name: 'Near-testnet',
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
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
