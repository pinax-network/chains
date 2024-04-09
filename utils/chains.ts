import { ChainBase } from '../types/chain.types';

// Copied over form website, probably worth moving to @pinax/chains repo.

const isFirehoseSupported = (chain: ChainBase): boolean => {
  return (
    chain?.supported_services?.firehose?.released_at !== null &&
    chain?.supported_services?.firehose?.deprecated_at === null
  );
};

const isSubstreamsSupported = (chain: ChainBase): boolean => {
  return (
    chain?.supported_services?.substreams?.released_at !== null &&
    chain?.supported_services?.substreams?.deprecated_at === null
  );
};

const isRpcSupported = (chain: ChainBase): boolean => {
  return (
    chain?.supported_services?.rpc?.released_at !== null &&
    chain?.supported_services?.rpc?.deprecated_at === null
  );
};

const isChainSupported = (chain: ChainBase): boolean => {
  return (
    isFirehoseSupported(chain) ||
    isSubstreamsSupported(chain) ||
    isRpcSupported(chain)
  );
};

const wasFirehoseOnceSupported = (chain: ChainBase): boolean => {
  return chain?.supported_services?.firehose?.released_at !== null;
};

const wasSubstreamsOnceSupported = (chain: ChainBase): boolean => {
  return chain?.supported_services?.substreams?.released_at !== null;
};

const wasRpcOnceSupported = (chain: ChainBase): boolean => {
  return chain?.supported_services?.rpc?.released_at !== null;
};

const wasChainOnceSupported = (chain: ChainBase): boolean => {
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
