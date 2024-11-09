import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'zora',
  name: 'Zora Network',
  alt_names: [],
  graph_id: null,
  standard: 'erc20',
  is_detailed_blocks: true,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/zora-network',
    brand_theme: 'both',
    variants: ['branded'],
  },
  supported_services: {
    rpc: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-13T00:00:00.000Z',
      deprecated_at: null,
    },
    firehose: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-13T00:00:00.000Z',
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: '2024-08-01T00:00:00.000Z',
      full_released_at: '2024-11-13T00:00:00.000Z',
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  testnets: [],
  consensus: [],
  evms: [],
  metadata: {
    layer: 'L2',
    website: 'https://zora.co/',
  },
};

export default meta;
