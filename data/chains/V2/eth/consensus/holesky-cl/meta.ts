import { ___InternalConsensusLayer } from '../../../../../../types/chain.types';

const meta: ___InternalConsensusLayer = {
  id: 'holesky-cl',
  graph_id: null,
  name: 'Holesky Consensus Layer',
  alt_names: [],
  standard: 'evm',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  supported_services: {
    firehose: {
      beta_released_at: '2023-03-08T00:00:00.000Z',
      full_released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2023-03-08T00:00:00.000Z',
      full_released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
