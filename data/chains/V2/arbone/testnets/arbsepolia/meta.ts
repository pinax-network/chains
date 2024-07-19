import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'arbsepolia',
  graph_id: 'arbitrum-sepolia',
  name: 'Arbitrum Sepolia',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    rpc: 'released',
    firehose: 'released',
    substreams: 'released',
  },
};

export default meta;
