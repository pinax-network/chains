import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'zkastar',
  name: 'Astar zkEVM',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.zkevm.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1',
  },
  icon: {
    id: 'networks/astar',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
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
