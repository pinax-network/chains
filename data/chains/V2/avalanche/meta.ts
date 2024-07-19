import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'avalanche',
  graph_id: 'avalanche',
  name: 'Avalanche',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/avalanche',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.avax.network/',
  },
};

export default meta;
