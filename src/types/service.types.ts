export type Service = 'substreams' | 'firehose' | 'rpc';

export type ServiceEndpoint = {
  released_at: string | null;
  deprecated_at: string | null;
};
export type SupportedServices = { [key in Service]: ServiceEndpoint };
