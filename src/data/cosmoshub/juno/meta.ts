import { Testnet } from '../../../types/chain.types';

const meta: Testnet = {
  id: 'juno',
  graph_id: null,
  name: 'Juno',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: '2024-01-15T00:00:00.000Z',
    },
    substreams: {
      released_at: null,
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;