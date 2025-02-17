import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'linea',
  name: 'Linea',
  alt_names: [],
  graph_id: 'linea',
  standard: 'evm',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'linea',
    brand_theme: 'dark',
    variants: ['branded', 'mono'],
    type: 'networks',
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-12T00:00:00.000Z',
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-12T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-12T00:00:00.000Z',
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    api: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    website: 'https://linea.build/',
  },
};

export default meta;
