import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'bitcoin',
  graph_id: 'btc',
  name: 'Bitcoin',
  alt_names: ['btc'],
  standard: 'brc20',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.bitcoin.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-bitcoin/docs/main:sf.bitcoin.type.v1',
  },
  icon: {
    id: 'tokens/btc',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
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
    datasets: {
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
