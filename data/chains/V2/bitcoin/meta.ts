import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'bitcoin',
  graph_id: null,
  name: 'Bitcoin',
  alt_names: ['btc'],
  standard: 'brc20',
  rpc_poller: true,
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
      beta_released_at: '2023-03-21T00:00:00.000Z',
      full_released_at: '2023-03-21T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2023-03-21T00:00:00.000Z',
      full_released_at: '2023-03-21T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://bitcoin.org/',
  },
};

export default meta;
