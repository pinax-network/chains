import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'chiado',
  graph_id: null,
  name: 'Chiado',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      released_at: null,
      deprecated_at: null,
    },
    substreams: {
      released_at: null,
      deprecated_at: null,
    },
    rpc: {
      released_at: null,
      deprecated_at: null,
    },
  },
};

export default meta;
