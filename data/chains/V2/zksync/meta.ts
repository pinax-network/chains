import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'zksync',
  graph_id: 'zksync-era',
  name: 'zkSync Era',
  alt_names: [],
  standard: 'erc20',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'zksync',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
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
    website: 'https://zksync.io/',
    tags: ['zk'],
  },
};

export default meta;
