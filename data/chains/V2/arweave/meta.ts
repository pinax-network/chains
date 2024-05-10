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
  },
  supported_services: {
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2024-03-03T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
