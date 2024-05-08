import { Chain, ConsensusLayer, Testnet } from '../types/chain.types';

const isFirehoseSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return (
    chain?.supported_services?.firehose?.released_at !== null &&
    chain?.supported_services?.firehose?.deprecated_at === null
  );
};

const isSubstreamsSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return (
    chain?.supported_services?.substreams?.released_at !== null &&
    chain?.supported_services?.substreams?.deprecated_at === null
  );
};

const isRpcSupported = (chain: Chain | Testnet | ConsensusLayer): boolean => {
  // Can take a Consensus Layer as parameter but will always return false.
  const castedChain = chain as any;
  if (castedChain.supported_services.rpc === undefined) {
    return false;
  }

  return (
    castedChain?.supported_services?.rpc?.released_at !== null &&
    castedChain?.supported_services?.rpc?.deprecated_at === null
  );
};

const isChainSupported = (chain: Chain | Testnet | ConsensusLayer): boolean => {
  return (
    isFirehoseSupported(chain) ||
    isSubstreamsSupported(chain) ||
    isRpcSupported(chain)
  );
};

const wasFirehoseOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return chain?.supported_services?.firehose?.released_at !== null;
};

const wasSubstreamsOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return chain?.supported_services?.substreams?.released_at !== null;
};

const wasRpcOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  // Can take a Consensus Layer as parameter but will always return false.
  const castedChain = chain as any;
  if (castedChain.supported_services.rpc === undefined) {
    return false;
  }

  return castedChain?.supported_services?.rpc?.released_at !== null;
};

const wasChainOnceSupported = (
  chain: Chain | Testnet | ConsensusLayer,
): boolean => {
  return (
    wasFirehoseOnceSupported(chain) ||
    wasSubstreamsOnceSupported(chain) ||
    wasRpcOnceSupported(chain)
  );
};

export {
  isFirehoseSupported,
  isSubstreamsSupported,
  isRpcSupported,
  isChainSupported,
  wasFirehoseOnceSupported,
  wasSubstreamsOnceSupported,
  wasRpcOnceSupported,
  wasChainOnceSupported,
};
