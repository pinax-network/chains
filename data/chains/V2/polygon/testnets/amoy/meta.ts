import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'amoy',
  graph_id: 'polygon-amoy',
  name: 'Amoy',
  alt_names: [],
  standard: 'erc20',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-04-12T00:00:00.000Z',
      full_released_at: '2024-04-12T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-04-12T00:00:00.000Z',
      full_released_at: '2024-04-12T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-04-12T00:00:00.000Z',
      full_released_at: '2024-04-12T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
