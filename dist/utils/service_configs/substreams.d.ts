import { ServiceEndpoint } from '../../types/service.types';
import { Chain } from '../../types/chain.types';
declare const _default: {
  service: ServiceEndpoint;
  generateTomlEnv: (chain: Chain, token: string) => string;
  generateJavascriptEnv: (chain: Chain, apiKey: string) => string;
  generateCurlConfig: (chain: Chain, api_key: string) => string;
  generateTomlConfig: (chain: Chain) => string;
  generateJavascriptConfig: () => string;
};
export default _default;
//# sourceMappingURL=substreams.d.ts.map
