import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'wax',
  graph_id: null,
  name: 'WAX',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'tokens/waxp',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://wax.io/',
  },
};

export default meta;
