import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'holesky',
  graph_id: null,
  name: 'Holesky',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
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
