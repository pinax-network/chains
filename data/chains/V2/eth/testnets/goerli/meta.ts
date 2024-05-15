import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'goerli',
  graph_id: null,
  name: 'Goerli',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
      full: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
    },
    substreams: {
      beta: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
      full: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
    },
    rpc: {
      beta: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
      full: {
        released_at: '2023-03-08T00:00:00.000Z',
        deprecated_at: '2023-03-21T00:00:00.000Z',
      },
    },
  },
};

export default meta;
