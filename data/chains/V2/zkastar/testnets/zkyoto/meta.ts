import { ___InternalTestnet } from '../../../../../../types/chain.types';

const meta: ___InternalTestnet = {
  id: 'zkyoto',
  name: 'Astar zKyoto',
  alt_names: [],
  graph_id: 'zkyoto-testnet',
  standard: 'erc20',
  rpc_poller: true,
  block_type: {
    label: 'sf.zkevm.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-zkevm/docs/main:sf.zkevm.type.v1',
  },
  supported_services: {
    rpc: 'beta',
    firehose: 'beta',
    substreams: 'beta',
  },
};

export default meta;
