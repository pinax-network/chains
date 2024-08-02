import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'cosmoshub',
  graph_id: 'cosmoshub-4',
  name: 'Cosmos Hub',
  alt_names: [],
  standard: 'cosmos',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.cosmos.type.v1.Block',
    url: 'https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto',
  },
  icon: {
    id: 'networks/cosmos',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
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
  },
  metadata: {
    website: 'https://cosmos.network/',
  },
};

export default meta;
