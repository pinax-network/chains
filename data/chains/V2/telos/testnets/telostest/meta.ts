import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'telostest',
  graph_id: null,
  name: 'Telos Test',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
};

export default meta;
