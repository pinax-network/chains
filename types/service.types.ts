export type Service = "substreams" | "firehose" | "rpc";

export type SupportedServicesFill = { [key in Service]?: ServiceEndpointFill };

export type ServiceEndpointFill = {
  released_at?: Date;
  deprecated_at?: Date;
};

export type SupportedServices = { [key in Service]?: ServiceEndpoint };

export interface ServiceEndpoint extends ServiceEndpointFill {
  url: string;
  port: number;
}
