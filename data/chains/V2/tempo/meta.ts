import type { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'tempo',
  graph_id: 'tempo',
  name: 'Tempo',
  alt_names: ['evm-4217', 'tempo-mainnet'],
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tempo',
    brand_theme: 'light',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: '2026-10-03T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: null,
      full_released_at: '2026-10-03T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: null,
      full_released_at: '2026-10-03T00:00:00.000Z',
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    api: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://tempo.xyz/',
  },
};

export default meta;
