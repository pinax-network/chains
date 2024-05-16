import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'optimism',
  graph_id: 'optimism',
  name: 'Optimism',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/optimistic-ethereum',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2024-01-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-01-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2024-01-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-01-01T00:00:00.000Z',
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
  metadata: {
    website: 'https://optimism.io/',
  },
};

export default meta;
