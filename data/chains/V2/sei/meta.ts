import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'sei',
  graph_id: null,
  name: 'Sei',
  alt_names: [],
  standard: 'sei',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/sei',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.sei.io/',
  },
};

export default meta;
