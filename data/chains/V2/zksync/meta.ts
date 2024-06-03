import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'zksync',
  graph_id: 'zksync-era',
  name: 'zkSync Era',
  alt_names: [],
  standard: 'rrc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/zksync',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://zksync.io/',
  },
};

export default meta;
