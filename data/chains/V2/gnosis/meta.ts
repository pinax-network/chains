import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'gnosis',
  graph_id: 'gnosis',
  name: 'Gnosis',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'tokens/gno',
    brand_theme: 'dark',
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://gnosis.io/',
  },
};

export default meta;
