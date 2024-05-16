import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'eos',
  graph_id: null,
  name: 'EOS',
  alt_names: [],
  standard: 'antelope',
  block_type: {
    label: 'sf.antelope.type.v1.Block',
    url: 'https://buf.build/pinax/firehose-antelope/docs/main:sf.antelope.type.v1',
  },
  icon: {
    id: 'tokens/eos',
    brand_theme: 'light',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'deprecated',
    substreams: 'unreleased',
  },
  metadata: {
    website: 'https://eosnetwork.com/',
  },
};

export default meta;
