import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'waxtest',
  graph_id: null,
  name: 'WAX Test',
  alt_names: [],
  standard: 'antelope',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2023-12-01T00:00:00.000Z',
      full_released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2023-12-01T00:00:00.000Z',
      full_released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
