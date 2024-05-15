export type ConsensusLayerServiceID = 'substreams' | 'firehose';
export type ServiceID = ConsensusLayerServiceID | 'rpc';

export type ServiceEndpoint = {
  name: string;
  endpoint_slug: ServiceID;
  port: number;
};

export type ServiceEndpointStatus = {
  beta: {
    released_at: string | null;
    deprecated_at: string | null;
  };
  full: {
    released_at: string | null;
    deprecated_at: string | null;
  };
};

export type ConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceEndpointStatus;
};
export type SupportedServices = { [key in ServiceID]: ServiceEndpointStatus };
