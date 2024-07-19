import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'linea',
  name: 'Linea',
  alt_names: [],
  graph_id: 'linea',
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/linea',
    brand_theme: 'dark',
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
    website: 'https://linea.build/',
  },
};

export default meta;
