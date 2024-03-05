import { Chain } from '../types/chain.types';

const isFirehoseSupported = (chain: Chain): boolean => {
  return (
    chain?.supported_services?.firehose?.released_at !== undefined &&
    !chain?.supported_services?.firehose?.deprecated_at !== undefined
  );
};

const isSubstreamsSupported = (chain: Chain): boolean => {
  return (
    chain?.supported_services?.substreams?.released_at !== undefined &&
    !chain?.supported_services?.substreams?.deprecated_at !== undefined
  );
};

const isRpcSupported = (chain: Chain): boolean => {
  return (
    chain?.supported_services?.rpc?.released_at !== undefined &&
    !chain?.supported_services?.rpc?.deprecated_at !== undefined
  );
};

const isChainSupported = (chain: Chain): boolean => {
  return (
    isFirehoseSupported(chain) ||
    isSubstreamsSupported(chain) ||
    isRpcSupported(chain)
  );
};

export {
  isFirehoseSupported,
  isSubstreamsSupported,
  isRpcSupported,
  isChainSupported,
};
