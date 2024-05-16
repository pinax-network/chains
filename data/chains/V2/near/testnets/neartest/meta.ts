import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'neartest',
  graph_id: 'near-testnet',
  name: 'Near-testnet',
  alt_names: [],
  standard: 'near',
  block_type: {
    label: 'sf.near.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
};

export default meta;
