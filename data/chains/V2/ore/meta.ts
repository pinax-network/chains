import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'ore',
  graph_id: null,
  name: 'Ore',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'networks/ore',
    brand_theme: 'both',
    variants: ['branded', 'mono'],
  },
  supported_services: {
    rpc: 'deprecated',
    firehose: 'deprecated',
    substreams: 'deprecated',
  },
  metadata: {
    website: 'https://ore.network/',
  },
};

export default meta;
