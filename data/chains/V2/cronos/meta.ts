import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'cronos',
  name: 'Cronos',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/cronos',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    website: 'https://cronos.org/',
  },
};

export default meta;
