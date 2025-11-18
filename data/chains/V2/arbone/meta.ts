import type { ___InternalChain } from '../../../../types/chain.types';

// import branded from "./arbone.branded.svg"
// import dark from "./arbone.dark.svg"
// import light from "./arbone.light.svg"

// export { branded, dark, light };

const meta: ___InternalChain = {
  id: 'arbone',
  graph_id: 'arbitrum-one',
  name: 'Arbitrum One',
  alt_names: [],
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'arbitrum-one',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: '2024-06-10T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: '2024-06-10T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: '2024-06-10T00:00:00.000Z',
      full_released_at: null,
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
    website: 'https://arbitrum.io/',
  },
};

export default meta;
