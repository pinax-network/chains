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
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://arweave.org/',
  },
};

export default meta;
