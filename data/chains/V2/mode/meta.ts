import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'mode',
  name: 'Mode Network',
  alt_names: [],
  graph_id: 'mode-mainnet',
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/mode',
    brand_theme: 'light',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'beta',
    substreams: 'beta',
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L2',
    website: 'https://www.mode.network/',
  },
};

export default meta;