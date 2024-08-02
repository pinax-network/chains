import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'fuse',
  name: 'Fuse',
  alt_names: [],
  graph_id: 'fuse',
  standard: 'erc20',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/fuse',
    brand_theme: 'light',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L1',
    website: 'https://fuse.io/',
  },
};

export default meta;
