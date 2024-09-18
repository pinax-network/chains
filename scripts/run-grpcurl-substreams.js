const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { affectedChains } = require('./known-issues-chains');
const filePath = path.resolve(__dirname, '../data/chains/V2/chains.json');
const chains = JSON.parse(
  fs.readFileSync(filePath, 'utf8'),
);
function runGrpcurl(chainId, serviceName) {
  return new Promise((resolve, reject) => {
    const command = `grpcurl ${chainId}.${serviceName}.pinax.network:443 sf.${serviceName}.rpc.v2.EndpointInfo/Info`;
    console.log(`Executing: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(new Error(`Command failed: ${command}`));
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(`Response: ${stdout}`);
      resolve(`Success: ${command}`);
    });
  });
}

async function run() {
  try {
    for (const chain of chains) {
      const substreamsService = chain.supported_services.substreams;

      if (
        affectedChains.some(
          (affectedChain) =>
            affectedChain.id === chain.id &&
            affectedChain.affected_services.includes('substreams'),
        )
      ) {
        console.log(
          `${chain.id} is affected by known issues. Endpoint: ${chain.id}.substreams.pinax.network`,
        );
        return;
      }

      if (
        substreamsService &&
        substreamsService.deprecated_at === null &&
        (substreamsService.beta_released_at ||
          substreamsService.full_released_at)
      ) {
        console.log(
          `Running grpcurl for substreams service on chain ${chain.id}`,
        );
        await runGrpcurl(chain.id, 'substreams');
      }
    }
    console.log('All grpcurl commands executed successfully.');
  } catch (error) {
    console.error('Error during grpcurl execution:', error.message);
    process.exit(1);
  }
}

run();
