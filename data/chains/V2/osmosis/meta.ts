import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'osmosis',
  graph_id: null,
  name: 'Osmosis',
  alt_names: [],
  standard: 'cosmos',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.cosmos.type.v1.Block',
    url: 'https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto',
  },
  icon: {
    id: 'osmosis',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-01-01T00:00:00.000Z',
      full_released_at: '2024-01-01T00:00:00.000Z',
      deprecated_at: '2023-10-29T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: null,
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
    website: 'https://osmosis.zone/',
  },
};

export default meta;
