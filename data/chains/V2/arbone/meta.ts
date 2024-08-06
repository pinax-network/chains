import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'arbone',
  graph_id: 'arbitrum-one',
  name: 'Arbitrum One',
  alt_names: [],
  standard: 'erc20',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/arbi',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: '2024-06-10T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: '2024-06-10T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://arbitrum.io/',
  },
};

export default meta;
