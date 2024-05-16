import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'juno',
  graph_id: null,
  name: 'Juno',
  alt_names: [],
  standard: 'cosmos',
  block_type: {
    label: 'sf.cosmos.type.v1.Block',
    url: 'https://github.com/figment-networks/proto-cosmos/blob/main/sf/cosmos/type/v1/type.proto',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
};

export default meta;
