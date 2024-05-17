import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'optimism',
  graph_id: 'optimism',
  name: 'Optimism',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/optimistic-ethereum',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://optimism.io/',
  },
};

export default meta;
