import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'ronin',
  graph_id: null,
  name: 'Ronin',
  alt_names: [],
  standard: 'rrc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/ronin',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://roninchain.com/',
  },
};

export default meta;
