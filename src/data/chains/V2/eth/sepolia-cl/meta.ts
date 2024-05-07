import { Testnet } from '../../../../types/chain.types';

const meta: Testnet = {
  id: 'sepolia-cl',
  graph_id: null,
  name: 'Sepolia Consensus Layer',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: null,
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
