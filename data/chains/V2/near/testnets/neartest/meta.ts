import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'neartest',
  graph_id: 'near-testnet',
  name: 'Near-testnet',
  alt_names: [],
  standard: 'near',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.near.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
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
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
