import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'starknet',
  graph_id: null,
  name: 'Starknet', // missing
  alt_names: [], // missing
  standard: 'erc20', // missing
  block_type: {
    // missing
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    // missing
    id: 'networks/starknet',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.starknet.io/',
  },
};

export default meta;
