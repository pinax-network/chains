import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'base',
  graph_id: 'base',
  name: 'Base',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/base',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://www.base.org/',
  },
};

export default meta;
