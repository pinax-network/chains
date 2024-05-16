import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'boba',
  name: 'Boba Network',
  alt_names: [],
  graph_id: 'boba',
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/boba',
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
    website: 'https://boba.network/',
  },
};

export default meta;
