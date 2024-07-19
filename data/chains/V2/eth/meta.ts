import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'eth',
  graph_id: 'mainnet',
  name: 'Ethereum',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/ethereum',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'released',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://ethereum.org/',
  },
};

export default meta;
