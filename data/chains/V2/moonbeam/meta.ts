import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'moonbeam',
  graph_id: 'moonbeam',
  name: 'Moonbeam',
  alt_names: [],
  standard: 'erc20',
  is_detailed_blocks: false,
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
    firehose: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-08-01T00:00:000Z',
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://moonbeam.network/',
  },
};

export default meta;
