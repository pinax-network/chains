import { Chain } from '../../../types/chain.types';

const meta: Chain = {
  id: 'wax',
  graph_id: null,
  name: 'WAX',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'tokens/wax',
    brand_theme: 'both',
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
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;