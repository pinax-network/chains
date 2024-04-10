export type ServiceID = 'substreams' | 'firehose' | 'rpc';

export type ServiceEndpoint = {
  name: string;
  endpoint_slug: ServiceID;
  port: number;
};

export type ServiceEndpointStatus = {
  released_at: string | null;
  deprecated_at: string | null;
};
export type SupportedServices = { [key in ServiceID]: ServiceEndpointStatus };
