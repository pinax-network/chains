import { ___InternalChain } from '../../../../types/chain.types';

const meta: ___InternalChain = {
  id: 'ronin',
  graph_id: null,
  name: 'Ronin',
  alt_names: [],
  standard: 'rrc20',
  is_detailed_blocks: false,
  block_type: {
    label: 'sf.ethereum.type.v2.Block',
    url: 'https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2',
  },
  icon: {
    id: 'networks/ronin',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    firehose: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    substreams: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    rpc: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
    datasets: {
      beta_released_at: null,
      full_released_at: null,
      deprecated_at: null,
    },
  },
  metadata: {
    website: 'https://roninchain.com/',
  },
};

export default meta;
