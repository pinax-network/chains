import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'solana',
  graph_id: 'solana-mainnet-beta',
  name: 'Solana',
  alt_names: [],
  standard: 'near',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.solana.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-solana',
  },
  icon: {
    id: 'tokens/sol',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-11-11T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-11-11T00:00:00.000Z',
      full_released_at: null,
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
    website: 'https://near.org/',
  },
};

export default meta;
