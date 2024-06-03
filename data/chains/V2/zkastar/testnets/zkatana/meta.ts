import { Testnet } from '../../../../../../types/chain.types';

const meta: Testnet = {
  id: 'zkatana',
  name: 'Astar zKatana',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
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
