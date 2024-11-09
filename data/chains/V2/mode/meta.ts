import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'mode',
  name: 'Mode Network',
  alt_names: [],
  graph_id: 'mode-mainnet',
  standard: 'erc20',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/mode',
    brand_theme: 'light',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-05-14T00:00:00.000Z',
      full_released_at: '2024-05-14T00:00:00.000Z',
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-05-14T00:00:00.000Z',
      full_released_at: '2024-05-14T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-05-14T00:00:00.000Z',
      full_released_at: '2024-05-14T00:00:00.000Z',
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L2',
    website: 'https://www.mode.network/',
  },
};

export default meta;
