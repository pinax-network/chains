import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'eth',
  graph_id: 'mainnet',
  name: 'Ethereum',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/ethereum',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://ethereum.org/',
  },
};

export default meta;
