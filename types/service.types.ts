export type ConsensusLayerServiceID = 'substreams' | 'firehose';
export type ServiceID = ConsensusLayerServiceID | 'rpc';

export type ServiceEndpoint = {
  name: string;
  endpoint_slug: ServiceID;
  port: number;
};

export type ServiceEndpointStatus =
  | 'unreleased'
  | 'beta'
  | 'released'
  | 'deprecated';

export type ConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceEndpointStatus;
};
export type SupportedServices = { [key in ServiceID]: ServiceEndpointStatus };
