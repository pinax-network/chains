import { ___InternalEVM } from '../../../../../../types/chain.types';

const meta: ___InternalEVM = {
  id: 'eosevm',
  graph_id: null,
  name: 'EOS EVM',
  alt_names: [],
  standard: 'erc20',
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
};

export default meta;
