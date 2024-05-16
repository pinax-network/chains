import { Chain } from '../../../../types/chain.types';

const meta: Chain = {
  id: 'bitcoin',
  graph_id: null,
  name: 'Bitcoin',
  alt_names: ['btc'],
  standard: 'brc20',
  block_type: {
    label: 'sf.bitcoin.type.v1.Block',
    url: 'https://buf.build/streamingfast/firehose-bitcoin/docs/main:sf.bitcoin.type.v1',
  },
  icon: {
    id: 'tokens/btc',
    brand_theme: 'both',
  },
  supported_services: {
    rpc: 'unreleased',
    firehose: 'released',
    substreams: 'released',
  },
  metadata: {
    website: 'https://bitcoin.org/',
  },
};

export default meta;
