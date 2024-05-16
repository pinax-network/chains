import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'near',
  graph_id: 'near-mainnet',
  name: 'Near',
  alt_names: [],
  standard: 'near',
  block_type: {
    label: 'sf.near.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-near/docs/main:sf.near.type.v1',
  },
  icon: {
    id: 'tokens/near',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://near.org/',
  },
};

export default meta;
