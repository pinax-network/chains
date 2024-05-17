import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'orestage',
  graph_id: null,
  name: 'Ore Stage',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    rpc: 'deprecated',
    firehose: 'deprecated',
    substreams: 'deprecated',
  },
};

export default meta;