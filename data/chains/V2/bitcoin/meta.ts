import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'bitcoin',
  graph_id: null,
  name: 'Bitcoin',
  alt_names: ['btc'],
  standard: 'brc20',
  block_type: {
    label: 'sf.bitcoin.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-bitcoin/docs/main:sf.bitcoin.type.v1',
  },
  icon: {
    id: 'tokens/btc',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2023-12-21T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-21T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2023-12-21T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-21T00:00:00.000Z',
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
