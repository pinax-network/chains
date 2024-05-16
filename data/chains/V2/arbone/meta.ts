import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'arbone',
  graph_id: 'arbitrum-one',
  name: 'Arbitrum One',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/arbi',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'beta',
    substreams: 'beta',
  },
  metadata: {
    website: 'https://arbitrum.io/',
  },
};

export default meta;
