import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'near',
  graph_id: 'near-mainnet',
  name: 'Near',
  alt_names: [],
  standard: 'near',
  block_type: {
    label: 'sf.near.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
  },
  icon: {
    id: 'tokens/near',
    brand_theme: 'both',
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
  metadata: {
    website: 'https://near.org/',
  },
};

export default meta;
