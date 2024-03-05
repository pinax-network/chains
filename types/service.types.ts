export type Service = 'substreams' | 'firehose' | 'rpc';

export type ServiceEndpoint = {
  released_at: Date | null;
  deprecated_at: Date | null;
};
export type SupportedServices = { [key in Service]: ServiceEndpoint };
