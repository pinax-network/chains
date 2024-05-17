import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'cosmoshub',
  graph_id: 'cosmoshub-4',
  name: 'Cosmos Hub',
  alt_names: [],
  standard: 'cosmos',
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
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://cosmos.network/',
  },
};

export default meta;
