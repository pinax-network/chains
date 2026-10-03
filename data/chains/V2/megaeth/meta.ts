import type { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'megaeth',
  graph_id: 'megaeth',
  name: 'MegaETH',
  alt_names: ['evm-4326', 'megaeth-mainnet'],
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'megaeth',
    brand_theme: 'light',
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
    website: 'https://megaeth.com/',
  },
};

export default meta;
