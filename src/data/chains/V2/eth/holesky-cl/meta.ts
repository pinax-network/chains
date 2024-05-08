import { ConsensusLayer } from '../../../../../types/chain.types';

const meta: ConsensusLayer = {
  id: 'holesky-cl',
  graph_id: null,
  name: 'Holesky Consensus Layer',
  alt_names: [],
  supported_services: {
    firehose: {
      released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      released_at: '2023-03-08T00:00:00.000Z',
      deprecated_at: null,
    },
  },
};

export default meta;
