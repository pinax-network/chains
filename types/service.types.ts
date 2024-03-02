export type Service = "substreams" | "firehose" | "rpc";

export type SupportedServices = { [key in Service]: boolean };
