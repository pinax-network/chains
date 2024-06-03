import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'zkastar',
  name: 'Astar zkEVM',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
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
    rpc: 'beta',
    firehose: 'beta',
    substreams: 'beta',
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
