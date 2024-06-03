import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'x-layer',
  graph_id: null,
  name: 'X-Layer',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/x-layer',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.okx.com/fr/xlayer',
  },
};

export default meta;
