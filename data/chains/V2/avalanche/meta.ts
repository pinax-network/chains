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
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://www.avax.network/',
  },
};

export default meta;
