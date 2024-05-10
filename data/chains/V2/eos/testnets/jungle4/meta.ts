import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'jungle4',
  graph_id: null,
  name: 'Jungle4',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
