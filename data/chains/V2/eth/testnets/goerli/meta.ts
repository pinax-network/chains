import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'goerli',
  graph_id: null,
  name: 'Goerli',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    rpc: 'deprecated',
    firehose: 'deprecated',
    substreams: 'deprecated',
  },
};

export default meta;
