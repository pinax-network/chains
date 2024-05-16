import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'arweave',
  graph_id: 'arweave-mainnet',
  name: 'Arweave',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.arweave.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-arweave/docs/main:sf.arweave.type.v1',
  },
  icon: {
    id: 'tokens/ar',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2023-12-01T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: '2024-03-03T00:00:00.000Z',
        deprecated_at: null,
      },
      full: {
        released_at: '2024-03-03T00:00:00.000Z',
        deprecated_at: null,
      },
    },
    rpc: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
  },
  metadata: {
    website: 'https://arweave.org/',
  },
};

export default meta;
