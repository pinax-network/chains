import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'bsc',
  graph_id: 'bsc',
  name: 'BNB',
  alt_names: ['bsc', 'binance'],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/binance-smart-chain',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'released',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://www.bnbchain.org/en/bnb-smart-chain',
  },
};

export default meta;
