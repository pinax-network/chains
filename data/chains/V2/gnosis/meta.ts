import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'gnosis',
  graph_id: 'gnosis',
  name: 'Gnosis',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/gno',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://gnosis.io/',
  },
};

export default meta;
