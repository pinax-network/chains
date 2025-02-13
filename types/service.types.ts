export type ConsensusLayerServiceID = 'substreams' | 'firehose';
export type ServiceID = ConsensusLayerServiceID | 'rpc' | 'datasets' | 'api';

export type ServiceEndpoint = {
  name: string;
  endpoint_slug: ServiceID;
  port: number;
};

export type ___InternalConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceStatusDates;
};

export type ___InternalSupportedServices = {
  [key in ServiceID]: ServiceStatusDates;
};

export type ServiceStatusDates = {
  beta_released_at: string | null;
  full_released_at: string | null;
  deprecated_at: string | null;
};

export type ConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceStatusDates;
};

export type SupportedServices = {
  [key in ServiceID]: ServiceStatusDates;
};
