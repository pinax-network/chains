import { Testnet } from '../../../types/chain.types';

const meta: Testnet = {
  id: 'goerli-cl',
  graph_id: null,
  name: 'Goerli Consensus Layer',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: null,
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
