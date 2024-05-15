import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'chapel',
  graph_id: 'chapel',
  name: 'Chapel',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    rpc: {
      beta: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
  },
};

export default meta;
