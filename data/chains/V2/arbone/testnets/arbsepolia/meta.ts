import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'arbsepolia',
  graph_id: 'arbitrum-sepolia',
  name: 'Arbitrum Sepolia',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    rpc: {
      beta: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-05-03T00:00:00.000Z',
        deprecated_at: null,
      },
    },
  },
};

export default meta;
