import type { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'soneium',
  graph_id: 'soneium',
  name: 'Soneium',
  alt_names: ['evm-1868', 'soneium-mainnet'],
  standard: 'evm',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'soneium',
    brand_theme: 'dark',
    variants: ['branded'],
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
    website: 'https://soneium.org/',
  },
};

export default meta;
