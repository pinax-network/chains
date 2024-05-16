import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'kylin',
  graph_id: null,
  name: 'Kylin',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
};

export default meta;
