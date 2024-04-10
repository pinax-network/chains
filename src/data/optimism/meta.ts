import { Chain } from '../../types/chain.types';

const meta: Chain = {
  id: 'optimism',
  graph_id: 'optimism',
  name: 'Optimism',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/optimism',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      released_at: '2024-01-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2024-01-01T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;