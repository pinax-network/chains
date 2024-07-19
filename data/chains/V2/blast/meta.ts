import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'blast',
  name: 'Blast Network',
  alt_names: [],
  graph_id: 'blast-mainnet',
  index: 0,
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/blast',
    brand_theme: 'light',
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
    website: 'https://blast.io/en',
  },
};

export default meta;
