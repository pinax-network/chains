import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'zkyoto',
  name: 'Astar zKyoto',
  alt_names: [],
  graph_id: 'zkyoto-testnet',
  standard: 'erc20',
  block_type: {
    label: 'sf.zkevm.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1',
  },
  supported_services: {
    rpc: {
      beta: {
        released_at: '2024-05-14T00:00:00Z',
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    firehose: {
      beta: {
        released_at: '2024-05-14T00:00:00Z',
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2024-05-14T00:00:00Z',
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
