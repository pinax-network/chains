import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'moonbeam',
  graph_id: 'moonbeam',
  name: 'Moonbeam',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/moonbeam',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://moonbeam.network/',
  },
};

export default meta;
