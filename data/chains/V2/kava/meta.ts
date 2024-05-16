import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'kava',
  graph_id: null,
  name: 'Kava',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/kava',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'unreleased',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://www.kava.io/',
  },
};

export default meta;
