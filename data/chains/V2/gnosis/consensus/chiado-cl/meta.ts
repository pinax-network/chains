import { ___InternalConsensusLayer } from '../../../../../../types/chain.types';

const meta: ___InternalConsensusLayer = {
  id: 'chiado-cl',
  graph_id: null,
  name: 'Chiado Consensus Layer',
  alt_names: [],
  standard: 'erc20',
  rpc_poller: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: 'released',
    substreams: 'released',
  },
};

export default meta;
