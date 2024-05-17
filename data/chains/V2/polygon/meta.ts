import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'polygon',
  graph_id: 'matic',
  name: 'Polygon',
  alt_names: ['matic'],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/polygon-pos',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'released',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://polygon.technology/',
  },
};

export default meta;
