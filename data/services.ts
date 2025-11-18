import type { ServiceEndpoint } from '../types/service.types';

const services: Array<ServiceEndpoint> = [
  {
    name: 'Substreams',
    endpoint_slug: 'substreams',
    port: 443,
  },
  {
    name: 'Firehose',
    endpoint_slug: 'firehose',
    port: 443,
  },
  {
    name: 'RPC',
    endpoint_slug: 'rpc',
    port: 443,
  },
];

export default services;
