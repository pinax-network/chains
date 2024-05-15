import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'neartest',
  graph_id: 'near-testnet',
  name: 'Near-testnet',
  alt_names: [],
  standard: 'near',
  block_type: {
    label: 'sf.near.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
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
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
  },
};

export default meta;
