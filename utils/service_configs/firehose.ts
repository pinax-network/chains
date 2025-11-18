import services from '../../data/services';
import type { Chain } from '../../types/chain.types';
import type { ServiceEndpoint } from '../../types/service.types';

const firehose = services.filter(
  (s: ServiceEndpoint) => s.endpoint_slug.indexOf('firehose') > -1,
)[0];

const generateGRPCurlConfig = (chain: Chain, apiKey: string) => {
  return [
    `# Set your API Key`,
    `export PINAX_KEY=${apiKey}`,
    ``,
    `# Set your JWT`,
    `export FIREHOSE_API_TOKEN=$(curl https://auth.pinax.network/v1/auth/issue -s --data-binary '{"api_key":"'$PINAX_KEY'"}' | jq -r .token)`,
    ``,
    `# Run Firehose`,
    `grpcurl -keepalive-time 30 -max-msg-sz 50241867 -d '{"start_block_num": -100}' -H 'Authorization: "$FIREHOSE_API_TOKEN"' ${chain.id}.firehose.pinax.network:443 sf.firehose.v2.Stream.Blocks`,
  ].join('\n');
};

const generateTomlEnv = (chain: Chain, token: string) => {
  return [
    `PINAX_RPC_NODE=${chain.id}.rpc.pinax.network`,
    `PINAX_JWT=${token}`,
  ].join('\n');
};

const generateTomlConfig = (chain: Chain) => {
  const getERC20ConfigLines = (chain: Chain) => {
    if (chain.standard?.localeCompare('ERC-20') === 0)
      return [
        `   # Ethereum Based Chain`,
        `   { label = "bootstrap", details = { type = "web3", url = "$PINAX_RPC_NODE", features = [ "archive" ] }},`,
      ];
    return [];
  };

  return [
    `[chains.${chain.graph_id}]`,
    `shard = "primary"`,
    `provider = [`,
    ...getERC20ConfigLines(chain),
    `    # Firehose Configuration`,
    `    { label = "firehose", details = { type = "firehose", url = "https://${chain.id}.firehose.pinax.network:443", token = "$PINAX_JWT" }},`,
  ].join('\n');
};

export default {
  service: firehose,
  generateGRPCurlConfig,
  generateTomlEnv,
  generateTomlConfig,
};
