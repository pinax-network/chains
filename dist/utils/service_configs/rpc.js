import services from '../../data/services';
const rpc = services.filter((s) => s.endpoint_slug.indexOf('rpc') > -1)[0];
const generateCurlConfig = (chain, apiKey) => {
  return `curl -4vsH 'Content-Type: application/json' -d '{"jsonrpc": "2.0", "method": "eth_getBlockByNumber", "params": ["latest", false], "id": 1}' https://${chain.id}.rpc.pinax.network/v1/${apiKey}/`;
};
export default {
  service: rpc,
  generateCurlConfig,
};
//# sourceMappingURL=rpc.js.map
