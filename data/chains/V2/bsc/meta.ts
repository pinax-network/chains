import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'bsc',
  graph_id: 'bsc',
  name: 'BNB',
  alt_names: ['bsc', 'binance'],
  standard: 'evm',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'binance-smart-chain',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
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
      beta_released_at: '2023-12-01T00:00:00.000Z',
      full_released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    api: {
      beta_released_at: '2025-03-04T00:00:00.000Z',
      full_released_at: '2025-03-04T00:00:00.000Z',
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://www.bnbchain.org/en/bnb-smart-chain',
  },
};

export default meta;
