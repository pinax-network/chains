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
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://osmosis.zone/',
  },
};

export default meta;
