import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'zkastar',
  name: 'Astar zkEVM',
  alt_names: [],
  graph_id: null,
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.zkevm.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1',
  },
  icon: {
    id: 'astar',
    brand_theme: 'both',
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
    api: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L2',
    website: 'https://astar.network/',
  },
};

export default meta;
