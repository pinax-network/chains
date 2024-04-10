import { Chain } from '../../types/chain.types';

const meta: Chain = {
  id: 'celo',
  graph_id: 'celo',
  name: 'Celo',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/celo',
    brand_theme: 'light',
  },
  supported_services: {
    firehose: {
      released_at: null,
      deprecated_at: null,
    },
    substreams: {
      released_at: null,
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
