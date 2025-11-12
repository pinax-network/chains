import { ___InternalChain } from '../../../../types/chain.types';

// import branded from "./arweave.branded.svg"
// import dark from "./arweave.dark.svg"
// import light from "./arweave.light.svg"

// export { branded, dark, light };

const meta: ___InternalChain = {
  id: 'arweave',
  graph_id: null,
  name: 'Arweave',
  alt_names: [],
  standard: 'arweave',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.arweave.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-arweave/docs/main:sf.arweave.type.v1',
  },
  icon: {
    id: 'arweave',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2024-03-03T00:00:00.000Z',
      full_released_at: '2024-03-03T00:00:00.000Z',
      deprecated_at: '2025-11-12T00:00:00.000Z',
    },
    substreams: {
      beta_released_at: '2024-03-03T00:00:00.000Z',
      full_released_at: '2024-03-03T00:00:00.000Z',
      deprecated_at: '2025-11-12T00:00:00.000Z',
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
    api: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://arweave.org/',
  },
};

export default meta;
