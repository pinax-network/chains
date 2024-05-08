import services from '../../data/services';
import { ServiceEndpoint } from '../../types/service.types';
import { Chain } from '../../types/chain.types';

const substreams = services.filter(
  (s: ServiceEndpoint) => s.endpoint_slug.indexOf('substreams') > -1,
)[0];

const generateTomlEnv = (chain: Chain, token: string): string => {
  const getEthBasedEnv = () => {
    if (chain.standard?.localeCompare('ERC-20') === 0)
      return `PINAX_RPC_NODE=${chain.id}.rpc.pinax.network\n`;
    return '';
  };

  const getSubstreamsEnv = () => {
    return `PINAX_JWT=${token}`;
  };

  return ['# ...\n', getEthBasedEnv(), getSubstreamsEnv()].join('');
};

const generateJavascriptEnv = (chain: Chain, apiKey: string): string => {
  return `# ...
MANIFEST=https://example.com/substreams.spkg
SUBSTREAMS_URL=https://${chain.id}.${substreams.endpoint_slug}.pinax.network:${substreams.port}
SUBSTREAMS_API_KEY=${apiKey}`;
};

const generateCurlConfig = (chain: Chain, api_key: string): string => {
  return [
    `# Set your API Key`,
    `export PINAX_KEY=${api_key}`,
    ``,
    `# Set your JWT`,
    `export SUBSTREAMS_API_TOKEN=$(curl https://auth.pinax.network/v1/auth/issue -s --data-binary '{"api_key":"'$PINAX_KEY'"}' | jq -r .token)`,
    ``,
    `# Run Substreams`,
    `substreams run -e ${chain.id}.substreams.pinax.network:443 https://github.com/pinax-network/substreams/releases/download/blocks-v0.1.0/blocks-v0.1.0.spkg map_blocks -s -10`,
  ].join('\n');
};

const generateTomlConfig = (chain: Chain): string => {
  const getChainsLine = (chain: Chain) => `[chains.${chain.graph_id}]\n`;
  const getShardLine = () => `shard = "primary"\n`;
  const getEthConfigLines = (chain: Chain) => {
    if (chain.standard?.localeCompare('ERC-20') === 0)
      return `    # Ethereum Based Chain\n    { label = "bootstrap", details = { type = "web3", url = "$PINAX_RPC_NODE", features = [ "archive" ] }},\n`;
    return '';
  };
  const getSubstreamsConfigLines = (chain: Chain) =>
    `    # Substreams Configuration\n    { label = "substreams", details = { type = "substreams", url = "https://${chain.id}.${substreams.endpoint_slug}.pinax.network:${substreams.port}", token = "$PINAX_JWT" }},\n`;

  let config = [
    getChainsLine(chain),
    getShardLine(),
    'provider = [\n',
    getEthConfigLines(chain),
  ].join('');
  config += getSubstreamsConfigLines(chain);
  config += ']\n';
  return config;
};

const generateJavascriptConfig = (): string => {
  return `import { createRegistry, createRequest } from “@substreams/core”;
import { readPackage } from “@substreams/manifest”;
import { BlockEmitter, createDefaultTransport } from “@substreams/node”;

const { MANIFEST, SUBSTREAMS_URL, SUBSTREAMS_API_KEY } = process.env;

// Read Substream
const substreamPackage = await readPackage({MANIFEST});

// Connect Transport
const headers = new Headers({ “User-Agent”: “@substreams/node” });
const registry = createRegistry(substreamPackage);
const transport = createDefaultTransport({SUBSTREAMS_URL}, {SUBSTREAMS_API_KEY}, registry, headers);
const request = createRequest({substreamPackage, outputModule: “graph_out”, startBlockNum: -1});

// NodeJS Events
const emitter = new BlockEmitter(transport, request, registry);

// Session Trace ID
emitter.on("session", (session) => {
  console.dir(session);
});

// Stream Blocks
emitter.on("anyMessage", (message, cursor, clock) => {
  console.dir(message);
  console.dir(cursor);
  console.dir(clock);
});

// Start Emitter
await emitter.start();
console.log("✅ Done")`;
};

export default {
  service: substreams,
  generateTomlEnv,
  generateJavascriptEnv,
  generateCurlConfig,
  generateTomlConfig,
  generateJavascriptConfig,
};
