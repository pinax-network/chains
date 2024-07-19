import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'cardano',
  graph_id: null,
  name: 'Cardano',
  alt_names: [],
  standard: 'cardano',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/cardano',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://cardano.org/',
  },
};

export default meta;
