import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'orestage',
  graph_id: null,
  name: 'Ore Stage',
  alt_names: [],
  standard: 'antelope',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    firehose: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2023-03-01T00:00:00.000Z',
      full_released_at: '2023-03-01T00:00:00.000Z',
      deprecated_at: '2023-03-21T00:00:00.000Z',
    },
  },
};

export default meta;
