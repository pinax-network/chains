export type Service = 'substreams' | 'firehose' | 'rpc';

export type ServiceEndpoint = {
  released_at?: Date;
  deprecated_at?: Date;
};
export type SupportedServices = { [key in Service]?: ServiceEndpoint };
