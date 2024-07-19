import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'sepolia',
  graph_id: 'sepolia',
  name: 'Sepolia',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
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
