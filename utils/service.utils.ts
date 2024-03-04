export const getServiceEndpointUrl = (chainId: string, service: string) => {
  return `https://${chainId}.${service}.pinax.network`;
};
