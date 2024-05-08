import services from '../../data/services';
import { ServiceEndpoint } from '../../types/service.types';
import { Chain } from '../../types/chain.types';

const rpc = services.filter(
  (s: ServiceEndpoint) => s.endpoint_slug.indexOf('rpc') > -1,
)[0];

const generateCurlConfig = (chain: Chain, apiKey: string) => {
  return `curl -4vsH 'Content-Type: application/json' -d '{"jsonrpc": "2.0", "method": "eth_getBlockByNumber", "params": ["latest", false], "id": 1}' https://${chain.id}.rpc.pinax.network/v1/${apiKey}/`;
};

export default {
  service: rpc,
  generateCurlConfig,
};
