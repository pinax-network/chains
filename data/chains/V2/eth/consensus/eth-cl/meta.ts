import { ConsensusLayer } from '../../../../../../types/chain.types';

const meta: ConsensusLayer = {
  id: 'eth-cl',
  graph_id: null,
  name: 'Ethereum Consensus Layer',
  alt_names: [],
  standard: 'erc20',
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
