import { Chain } from '../../types/chain.types';

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
    firehose: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
    rpc: {
      released_at: '2023-12-01T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
