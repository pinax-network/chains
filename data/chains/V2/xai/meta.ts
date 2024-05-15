import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'xai',
  name: 'XAI',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/xai',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
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
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {},
};

export default meta;
