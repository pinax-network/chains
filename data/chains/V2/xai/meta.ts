import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'xai',
  name: 'XAI',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/xai',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L3',
    website: 'https://xai.games/',
  },
};

export default meta;
