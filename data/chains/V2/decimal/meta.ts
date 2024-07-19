import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'decimal',
  graph_id: null,
  name: 'Decimal',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/del',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.decimalchain.com/',
  },
};

export default meta;
