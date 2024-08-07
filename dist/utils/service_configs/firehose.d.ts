import { ServiceEndpoint } from '../../types/service.types';
import { Chain } from '../../types/chain.types';
declare const _default: {
  service: ServiceEndpoint;
  generateGRPCurlConfig: (chain: Chain, apiKey: string) => string;
  generateTomlEnv: (chain: Chain, token: string) => string;
  generateTomlConfig: (chain: Chain) => string;
};
export default _default;
//# sourceMappingURL=firehose.d.ts.map
