import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'moonbeam',
  graph_id: 'moonbeam',
  name: 'Moonbeam',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/moonbeam',
    brand_theme: 'both',
  },
  supported_services: {
    firehose: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    substreams: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
    rpc: {
      beta: {
        released_at: null,
        deprecated_at: null,
      },
      full: {
        released_at: null,
        deprecated_at: null,
      },
    },
  },
};

export default meta;
