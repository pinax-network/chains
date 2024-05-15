import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'osmosis',
  graph_id: 'osmosis-1',
  name: 'Osmosis',
  alt_names: [],
  standard: 'cosmos',
  block_type: {
    label: 'sf.cosmos.type.v1.Block',
    url: 'https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto',
  },
  icon: {
    id: 'networks/osmosis',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2024-01-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-01-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    rpc: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
  },
};

export default meta;
