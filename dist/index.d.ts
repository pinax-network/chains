type BlockType = {
  label: string;
  url: string;
};

type GraphID =
  | 'arbitrum-nova'
  | 'arbitrum-one'
  | 'arbitrum-sepolia'
  | 'arweave-mainnet'
  | 'astar-zkevm-mainnet'
  | 'aurora'
  | 'aurora-testnet'
  | 'avalanche'
  | 'base'
  | 'base-sepolia'
  | 'blast-mainnet'
  | 'blast-testnet'
  | 'boba'
  | 'bsc'
  | 'btc'
  | 'celo'
  | 'celo-alfajores'
  | 'chapel'
  | 'cosmoshub-4'
  | 'etherlink-mainnet'
  | 'etherlink-testnet'
  | 'fantom'
  | 'fantom-testnet'
  | 'fuji'
  | 'fuse'
  | 'gnosis'
  | 'gnosis-chiado'
  | 'gravity-mainnet'
  | 'gravity-testnet'
  | 'harmony'
  | 'holesky'
  | 'iotex'
  | 'iotex-testnet'
  | 'linea'
  | 'linea-sepolia'
  | 'mainnet'
  | 'matic'
  | 'mbase'
  | 'mode-mainnet'
  | 'mode-sepolia'
  | 'moonbeam'
  | 'moonriver'
  | 'near-mainnet'
  | 'near-testnet'
  | 'neox'
  | 'neox-testnet'
  | 'optimism'
  | 'optimism-sepolia'
  | 'osmo-test-4'
  | 'osmosis-1'
  | 'polygon-amoy'
  | 'polygon-zkevm'
  | 'polygon-zkevm-cardona'
  | 'rootstock'
  | 'scroll'
  | 'scroll-sepolia'
  | 'sei-atlantic'
  | 'sei-mainnet'
  | 'sepolia'
  | 'solana-mainnet-beta'
  | 'soneium-testnet'
  | 'theta-testnet-001'
  | 'xlayer-mainnet'
  | 'xlayer-sepolia'
  | 'zksync-era'
  | 'zksync-era-sepolia'
  | 'zksync-era-testnet'
  | 'zkyoto-testnet';

type PinaxID =
  | 'celo'
  | 'alfajores'
  | 'telos'
  | 'telostest'
  | 'zkastar'
  | 'zkatana'
  | 'zkyoto'
  | 'decimal'
  | 'x-layer'
  | 'arbone'
  | 'arbsepolia'
  | 'arbgoerli'
  | 'moonbeam'
  | 'arweave'
  | 'wax'
  | 'waxtest'
  | 'optimism'
  | 'scroll'
  | 'mode'
  | 'fantom'
  | 'boba'
  | 'bobasepolia'
  | 'fuse'
  | 'cosmoshub'
  | 'theta'
  | 'juno'
  | 'kava'
  | 'ronin'
  | 'polygon'
  | 'mumbai'
  | 'amoy'
  | 'bsc'
  | 'chapel'
  | 'xai'
  | 'osmosis'
  | 'bitcoin'
  | 'ux'
  | 'zora'
  | 'zksync'
  | 'avalanche'
  | 'blast'
  | 'blastsepolia'
  | 'near'
  | 'neartest'
  | 'eth'
  | 'eth-cl'
  | 'holesky-cl'
  | 'goerli-cl'
  | 'sepolia-cl'
  | 'holesky'
  | 'sepolia'
  | 'goerli'
  | 'starknet'
  | 'sei'
  | 'cronos'
  | 'ore'
  | 'orestage'
  | 'cardano'
  | 'linea'
  | 'eos'
  | 'jungle4'
  | 'kylin'
  | 'eosevm'
  | 'base'
  | 'gnosis'
  | 'chiado-cl'
  | 'gnosis-cl'
  | 'chiado'
  | 'litecoin';

type ConsensusLayerServiceID = 'substreams' | 'firehose';
type ServiceID = ConsensusLayerServiceID | 'rpc';
type ServiceEndpoint = {
  name: string;
  endpoint_slug: ServiceID;
  port: number;
};
type ___InternalConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceStatusDates;
};
type ___InternalSupportedServices = {
  [key in ServiceID]: ServiceStatusDates;
};
type ServiceStatusDates = {
  beta_released_at: string | null;
  full_released_at: string | null;
  deprecated_at: string | null;
};
type ConsensusLayerServices = {
  [key in ConsensusLayerServiceID]: ServiceStatusDates;
};
type SupportedServices = {
  [key in ServiceID]: ServiceStatusDates;
};

type Standard =
  | 'antelope'
  | 'arweave'
  | 'brc20'
  | 'cosmos'
  | 'erc20'
  | 'ltc20'
  | 'near'
  | 'rrc20'
  | 'sei'
  | 'cardano';

type ChainBase = {
  id: PinaxID;
  name: string;
  alt_names: string[];
  graph_id: GraphID | null;
  index?: number;
  standard: Standard | null;
  is_detailed_blocks: boolean;
  block_type: BlockType;
};
type ___InternalTestnet = ChainBase & {
  supported_services: ___InternalSupportedServices;
  metadata?: {
    deprecated_replacing_chain?: PinaxID;
  };
};
type ___InternalConsensusLayer = ChainBase & {
  supported_services: ___InternalConsensusLayerServices;
};
type ___InternalEVM = ChainBase & {
  supported_services: ___InternalSupportedServices;
};
type ChainIcon = {
  id: string;
  brand_theme: 'light' | 'dark' | 'both';
  variants?: Array<'branded' | 'mono'>;
};
/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
interface ___InternalChain extends ChainBase {
  icon: ChainIcon;
  supported_services: ___InternalSupportedServices;
  testnets?: Array<___InternalTestnet>;
  consensus?: Array<___InternalConsensusLayer>;
  evms?: Array<___InternalEVM>;
  metadata?: {
    layer?: 'L0' | 'L1' | 'L2' | 'L3';
    website?: string;
    mainchain_id?: PinaxID | string;
    tags?: string[];
    deprecated_replacing_chain?: PinaxID;
  };
}
type Testnet = ChainBase & {
  supported_services: SupportedServices;
  metadata?: {
    deprecated_replacing_chain?: PinaxID;
  };
};
type ConsensusLayer = ChainBase & {
  supported_services: ConsensusLayerServices;
};
type EVM = ChainBase & {
  supported_services: SupportedServices;
};
/**
 * Describes the Data that needs to be provided for a Chain.
 *
 * The Chain type theb extends the Chain type to include
 * the generated fields.
 */
interface Chain extends ChainBase {
  icon: {
    id: string;
    brand_theme: 'light' | 'dark' | 'both';
    variants?: Array<'branded' | 'mono'>;
  };
  supported_services: SupportedServices;
  testnets?: Array<Testnet>;
  consensus?: Array<ConsensusLayer>;
  evms?: Array<EVM>;
  metadata?: {
    layer?: 'L0' | 'L1' | 'L2' | 'L3';
    website?: string;
    mainchain_id?: PinaxID | string;
    tags?: string[];
    deprecated_replacing_chain?: PinaxID;
  };
}

declare const meta$14: ___InternalChain;

declare const meta$13: ___InternalTestnet;

declare const meta$12: ___InternalChain;

declare const meta$11: ___InternalTestnet;

declare const meta$10: ___InternalChain;

declare const meta$$: ___InternalTestnet;

declare const meta$_: ___InternalTestnet;

declare const meta$Z: ___InternalChain;

declare const meta$Y: ___InternalChain;

declare const meta$X: ___InternalChain;

declare const meta$W: ___InternalTestnet;

declare const meta$V: ___InternalTestnet;

declare const meta$U: ___InternalChain;

declare const meta$T: ___InternalChain;

declare const meta$S: ___InternalChain;

declare const meta$R: ___InternalTestnet;

declare const meta$Q: ___InternalChain;

declare const meta$P: ___InternalChain;

declare const meta$O: ___InternalChain;

declare const meta$N: ___InternalChain;

declare const meta$M: ___InternalChain;

declare const meta$L: ___InternalTestnet;

declare const meta$K: ___InternalChain;

declare const meta$J: ___InternalChain;

declare const meta$I: ___InternalTestnet;

declare const meta$H: ___InternalTestnet;

declare const meta$G: ___InternalChain;

declare const meta$F: ___InternalChain;

declare const meta$E: ___InternalChain;

declare const meta$D: ___InternalTestnet;

declare const meta$C: ___InternalTestnet;

declare const meta$B: ___InternalChain;

declare const meta$A: ___InternalTestnet;

declare const meta$z: ___InternalChain;

declare const meta$y: ___InternalChain;

declare const meta$x: ___InternalChain;

declare const meta$w: ___InternalChain;

declare const meta$v: ___InternalChain;

declare const meta$u: ___InternalChain;

declare const meta$t: ___InternalChain;

declare const meta$s: ___InternalChain;

type types_BlockType = BlockType;
type types_Chain = Chain;
type types_ChainBase = ChainBase;
type types_ChainIcon = ChainIcon;
type types_ConsensusLayer = ConsensusLayer;
type types_ConsensusLayerServiceID = ConsensusLayerServiceID;
type types_ConsensusLayerServices = ConsensusLayerServices;
type types_EVM = EVM;
type types_GraphID = GraphID;
type types_PinaxID = PinaxID;
type types_ServiceEndpoint = ServiceEndpoint;
type types_ServiceID = ServiceID;
type types_ServiceStatusDates = ServiceStatusDates;
type types_Standard = Standard;
type types_SupportedServices = SupportedServices;
type types_Testnet = Testnet;
type types____InternalChain = ___InternalChain;
type types____InternalConsensusLayer = ___InternalConsensusLayer;
type types____InternalConsensusLayerServices =
  ___InternalConsensusLayerServices;
type types____InternalEVM = ___InternalEVM;
type types____InternalSupportedServices = ___InternalSupportedServices;
type types____InternalTestnet = ___InternalTestnet;
declare namespace types {
  export type {
    types_BlockType as BlockType,
    types_Chain as Chain,
    types_ChainBase as ChainBase,
    types_ChainIcon as ChainIcon,
    types_ConsensusLayer as ConsensusLayer,
    types_ConsensusLayerServiceID as ConsensusLayerServiceID,
    types_ConsensusLayerServices as ConsensusLayerServices,
    types_EVM as EVM,
    types_GraphID as GraphID,
    types_PinaxID as PinaxID,
    types_ServiceEndpoint as ServiceEndpoint,
    types_ServiceID as ServiceID,
    types_ServiceStatusDates as ServiceStatusDates,
    types_Standard as Standard,
    types_SupportedServices as SupportedServices,
    types_Testnet as Testnet,
    types____InternalChain as ___InternalChain,
    types____InternalConsensusLayer as ___InternalConsensusLayer,
    types____InternalConsensusLayerServices as ___InternalConsensusLayerServices,
    types____InternalEVM as ___InternalEVM,
    types____InternalSupportedServices as ___InternalSupportedServices,
    types____InternalTestnet as ___InternalTestnet,
  };
}

declare const meta$r: ___InternalTestnet;

declare const meta$q: ___InternalChain;

declare const meta$p: ___InternalTestnet;

declare const meta$o: ___InternalChain;

declare const meta$n: ___InternalTestnet;

declare const meta$m: ___InternalTestnet;

declare const meta$l: ___InternalTestnet;

declare const meta$k: ___InternalConsensusLayer;

declare const meta$j: ___InternalConsensusLayer;

declare const meta$i: ___InternalConsensusLayer;

declare const meta$h: ___InternalConsensusLayer;

declare const meta$g: ___InternalChain;

declare const meta$f: ___InternalChain;

declare const meta$e: ___InternalChain;

declare const meta$d: ___InternalChain;

declare const meta$c: ___InternalTestnet;

declare const meta$b: ___InternalChain;

declare const meta$a: ___InternalChain;

declare const meta$9: ___InternalChain;

declare const meta$8: ___InternalTestnet;

declare const meta$7: ___InternalTestnet;

declare const meta$6: ___InternalEVM;

declare const meta$5: ___InternalChain;

declare const meta$4: ___InternalChain;

declare const meta$3: ___InternalTestnet;

declare const meta$2: ___InternalConsensusLayer;

declare const meta$1: ___InternalConsensusLayer;

declare const meta: ___InternalChain;

declare namespace chains {
  export {
    meta$13 as alfajores,
    meta$C as amoy,
    meta$V as arbgoerli,
    meta$X as arbone,
    meta$W as arbsepolia,
    meta$T as arweave,
    meta$t as avalanche,
    meta$5 as base,
    meta$x as bitcoin,
    meta$s as blast,
    meta$r as blastsepolia,
    meta$M as boba,
    meta$L as bobasepolia,
    meta$B as bsc,
    meta$b as cardano,
    meta$14 as celo,
    meta$A as chapel,
    meta$3 as chiado,
    meta$2 as chiadoCl,
    meta$J as cosmoshub,
    meta$e as cronos,
    meta$Z as decimal,
    meta$9 as eos,
    meta$6 as eosevm,
    meta$o as eth,
    meta$k as ethCl,
    meta$N as fantom,
    meta$K as fuse,
    meta$4 as gnosis,
    meta$1 as gnosisCl,
    meta$l as goerli,
    meta$i as goerliCl,
    meta$n as holesky,
    meta$j as holeskyCl,
    meta$8 as jungle4,
    meta$H as juno,
    meta$G as kava,
    meta$7 as kylin,
    meta$a as linea,
    meta as litecoin,
    meta$O as mode,
    meta$U as moonbeam,
    meta$D as mumbai,
    meta$q as near,
    meta$p as neartest,
    meta$Q as optimism,
    meta$d as ore,
    meta$c as orestage,
    meta$y as osmosis,
    meta$E as polygon,
    meta$F as ronin,
    meta$P as scroll,
    meta$f as sei,
    meta$m as sepolia,
    meta$h as sepoliaCl,
    meta$g as starknet,
    meta$12 as telos,
    meta$11 as telostest,
    meta$I as theta,
    meta$w as ux,
    meta$S as wax,
    meta$R as waxtest,
    meta$Y as xLayer,
    meta$z as xai,
    meta$10 as zkastar,
    meta$$ as zkatana,
    meta$u as zksync,
    meta$_ as zkyoto,
    meta$v as zora,
  };
}

declare const services: Array<ServiceEndpoint>;

declare namespace services$1 {
  export { services as default };
}

/**
 * Checks whether a service is fully supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceSupported: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean;
/**
 * Checks whether a service is in beta.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceBeta: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean | undefined;
/**
 * Checks whether a service was once supported.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 * @param service ServiceID or ConsensusLayerServiceID
 *
 * @returns boolean
 */
declare const isServiceDeprecated: (
  chain: Chain | Testnet | ConsensusLayer,
  service: ConsensusLayerServiceID | ServiceID,
) => boolean | undefined;
/**
 * Checks whether any service is fully supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainSupported: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Checks whether any service is in beta for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainBeta: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean | undefined;
/**
 * Checks whether any service was once supported for a given chain.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainDeprecated: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean | undefined;
/**
 * Finds a chain by its ID by scanning mainnets, consensus layers, testnets and EVMs.
 * Returns first match.
 *
 * @param db Array of Chains
 * @param id Chain ID
 *
 * @returns Chain, Testnet or ConsensusLayer
 */
declare const findChainById: (
  db: Array<Chain>,
  id: string,
) => Chain | Testnet | ConsensusLayer | EVM | undefined;
/**
 * Finds the mainnet chain or its subnet by ID from the given database.
 *
 * @param {Array<Chain>} db - The database of chains to search through.
 * @param {string} id - The ID of the chain or subnet to find.
 * @returns {Chain | undefined} - The chain containing the subnet with the given ID, or undefined if not found.
 */
declare const findSubnetMainnet: (
  db: Array<Chain>,
  id: string,
) => Chain | undefined;
/**
 * Checks whether a chain is a consensus layer.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainConsensusLayer: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Checks whether a chain is an EVM.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainEVM: (
  db: Array<Chain>,
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Checks whether a chain is a testnet.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const isChainTestnet: (
  db: Array<Chain>,
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Checks whether a chain has full block support. Chains that use RPC poller only
 * support partial blocks.
 *
 * @param chain Chain, Testnet or ConsensusLayer
 *
 * @returns boolean
 */
declare const hasChainFullBlockSupport: (
  chain: Chain | Testnet | ConsensusLayer,
) => boolean;
/**
 * Calculates the number of supported chains from a given array of chains.
 *
 * @param {Array<Chain | Testnet | ConsensusLayer | EVM>} chains - The array of chains to check for support.
 * @returns {number} The number of supported chains.
 */
declare const getNumberOfSupportedChains: (
  chains: Array<Chain | Testnet | ConsensusLayer | EVM>,
) => number;
/**
 * Determines the status of a given chain.
 *
 * @param {Chain | ConsensusLayer | EVM | Testnet} chain - The chain to check the status of.
 * @returns {string} The status of the chain, which can be "supported", "beta", "deprecated", or "unsupported".
 */
declare const getChainStatus: (
  chain: Chain | ConsensusLayer | EVM | Testnet,
) => 'supported' | 'beta' | 'deprecated' | 'unsupported';
/**
 * Retrieves the supported services for a given chain.
 *
 * @param {Chain | Testnet | ConsensusLayer | EVM} chain - The chain object to check for supported services.
 * @returns {Array<[ServiceID, string | null]>} An array of tuples where each tuple contains a service ID and the release date (beta or full) of the service.
 */
declare const getSupportedServices: (
  chain: Chain | Testnet | ConsensusLayer | EVM,
) => [ServiceID, string | null][];
/**
 * Retrieves the subnets of a given chain by concatenating its testnets, evms, and consensus arrays.
 *
 * @param {Chain} chain - The chain object containing testnets, evms, and consensus arrays.
 * @returns {Array<any>} - An array containing all subnets from the testnets, evms, and consensus arrays.
 */
declare const getChainSubnets: (chain: Chain) => any[];
declare const getChainIconUrl: (
  chainIcon: ChainIcon,
  theme: 'dark' | 'light',
  chainId: string,
) => string;

declare const chainsUtils_findChainById: typeof findChainById;
declare const chainsUtils_findSubnetMainnet: typeof findSubnetMainnet;
declare const chainsUtils_getChainIconUrl: typeof getChainIconUrl;
declare const chainsUtils_getChainStatus: typeof getChainStatus;
declare const chainsUtils_getChainSubnets: typeof getChainSubnets;
declare const chainsUtils_getNumberOfSupportedChains: typeof getNumberOfSupportedChains;
declare const chainsUtils_getSupportedServices: typeof getSupportedServices;
declare const chainsUtils_hasChainFullBlockSupport: typeof hasChainFullBlockSupport;
declare const chainsUtils_isChainBeta: typeof isChainBeta;
declare const chainsUtils_isChainConsensusLayer: typeof isChainConsensusLayer;
declare const chainsUtils_isChainDeprecated: typeof isChainDeprecated;
declare const chainsUtils_isChainEVM: typeof isChainEVM;
declare const chainsUtils_isChainSupported: typeof isChainSupported;
declare const chainsUtils_isChainTestnet: typeof isChainTestnet;
declare const chainsUtils_isServiceBeta: typeof isServiceBeta;
declare const chainsUtils_isServiceDeprecated: typeof isServiceDeprecated;
declare const chainsUtils_isServiceSupported: typeof isServiceSupported;
declare namespace chainsUtils {
  export {
    chainsUtils_findChainById as findChainById,
    chainsUtils_findSubnetMainnet as findSubnetMainnet,
    chainsUtils_getChainIconUrl as getChainIconUrl,
    chainsUtils_getChainStatus as getChainStatus,
    chainsUtils_getChainSubnets as getChainSubnets,
    chainsUtils_getNumberOfSupportedChains as getNumberOfSupportedChains,
    chainsUtils_getSupportedServices as getSupportedServices,
    chainsUtils_hasChainFullBlockSupport as hasChainFullBlockSupport,
    chainsUtils_isChainBeta as isChainBeta,
    chainsUtils_isChainConsensusLayer as isChainConsensusLayer,
    chainsUtils_isChainDeprecated as isChainDeprecated,
    chainsUtils_isChainEVM as isChainEVM,
    chainsUtils_isChainSupported as isChainSupported,
    chainsUtils_isChainTestnet as isChainTestnet,
    chainsUtils_isServiceBeta as isServiceBeta,
    chainsUtils_isServiceDeprecated as isServiceDeprecated,
    chainsUtils_isServiceSupported as isServiceSupported,
  };
}

declare const _default$4: {
  service: ServiceEndpoint;
  generateGRPCurlConfig: (chain: Chain, apiKey: string) => string;
  generateTomlEnv: (chain: Chain, token: string) => string;
  generateTomlConfig: (chain: Chain) => string;
};

declare namespace firehose {
  export { _default$4 as default };
}

declare const _default$3: {
  service: ServiceEndpoint;
  generateCurlConfig: (chain: Chain, apiKey: string) => string;
};

declare namespace rpc {
  export { _default$3 as default };
}

declare const _default$2: {
  service: ServiceEndpoint;
  generateTomlEnv: (chain: Chain, token: string) => string;
  generateJavascriptEnv: (chain: Chain, apiKey: string) => string;
  generateCurlConfig: (chain: Chain, api_key: string) => string;
  generateTomlConfig: (chain: Chain) => string;
  generateJavascriptConfig: () => string;
};

declare namespace substreams {
  export { _default$2 as default };
}

declare const service_configs_firehose: typeof firehose;
declare const service_configs_rpc: typeof rpc;
declare const service_configs_substreams: typeof substreams;
declare namespace service_configs {
  export {
    service_configs_firehose as firehose,
    service_configs_rpc as rpc,
    service_configs_substreams as substreams,
  };
}

declare const _default$1: {
  chainsUtils: typeof chainsUtils;
  service_configs: typeof service_configs;
};

declare const utils_chainsUtils: typeof chainsUtils;
declare const utils_service_configs: typeof service_configs;
declare namespace utils {
  export {
    utils_chainsUtils as chainsUtils,
    _default$1 as default,
    utils_service_configs as service_configs,
  };
}

declare const _default: {
  chains: typeof chains;
  services: typeof services$1;
  types: typeof types;
  utils: typeof utils;
};

export { chains, _default as default, services$1 as services, types, utils };
