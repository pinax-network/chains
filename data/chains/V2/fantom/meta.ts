import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'fantom',
  graph_id: 'fantom',
  name: 'Fantom',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/fantom',
    brand_theme: 'light',
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://fantom.foundation/',
  },
};

export default meta;
