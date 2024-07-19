import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'zora',
  name: 'Zora Network',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/zora-network',
    brand_theme: 'both',
    variants: ['branded'],
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
    website: 'https://zora.co/',
  },
};

export default meta;
