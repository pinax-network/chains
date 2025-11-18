const fs = require('node:fs');
const path = require('node:path');
const { exec } = require('node:child_process');
const { affectedChains } = require('./known-issues-chains');
const filePath = path.resolve(__dirname, '../data/chains/V2/chains.json');
const chains = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function runGrpcurl(chainId, serviceName) {
  return new Promise((resolve, reject) => {
    const command = `grpcurl ${chainId}.${serviceName}.pinax.network:443 sf.${serviceName}.v2.EndpointInfo/Info`;
    console.log(`Executing: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error: ${error.message}`);
        reject(new Error(`Command failed: ${command}`));
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(`✅ Response: ${stdout}`);
      resolve(`Success: ${command}`);
    });
  });
}

async function run() {
  try {
    for (const [chainIndex, chain] of chains.entries()) {
      const firehoseMainnetService = chain.supported_services.firehose;

      const testnets = chain?.testnets || [];
      const consensus = chain?.consensus || [];
      const evms = chain?.evms || [];

      console.log(
        `⏳ Running grpcurl for mainnet ==${chain.id}== (${chainIndex + 1} / ${chains?.length})`,
      );
      await runTest(chain, firehoseMainnetService);

      for (const [index, testnet] of testnets.entries()) {
        console.log(
          `⏳ Running grpcurl for testnets ==${testnet.id}== (${index + 1} / ${testnets?.length})`,
        );
        const firehoseService = testnet.supported_services.firehose;
        await runTest(testnet, firehoseService);
      }

      for (const [index, cons] of consensus.entries()) {
        console.log(
          `⏳ Running grpcurl for consensus-layers ==${cons.id}== (${index + 1} / ${consensus?.length})`,
        );
        const firehoseService = cons.supported_services.firehose;
        await runTest(cons, firehoseService);
      }

      for (const [index, evm] of evms.entries()) {
        console.log(
          `⏳ Running grpcurl for EVMs ==${evm.id}== (${index + 1} / ${evms?.length})`,
        );
        const firehoseService = evm.supported_services.firehose;
        await runTest(evm, firehoseService);
      }
    }
    console.log('✅✅✅ All grpcurl commands executed successfully.');
  } catch (error) {
    console.error('❌❌❌ Error during grpcurl execution:', error.message);
    process.exit(1);
  }
}

const runTest = async (chain, service) => {
  if (
    affectedChains.some(
      (affectedChain) =>
        affectedChain.id === chain.id &&
        affectedChain.affected_services.includes('firehose'),
    )
  ) {
    console.log(
      `🟡🟡🟡 ${chain.id} is affected by known issues. Endpoint: ${chain.id}.substreams.pinax.network`,
    );
    return;
  }

  if (
    service &&
    service.deprecated_at === null &&
    (service.beta_released_at || service.full_released_at)
  ) {
    console.log(
      `⏳⏳⏳ Running grpcurl for substreams service on chain ${chain.id}`,
    );
    return await runGrpcurl(chain.id, 'firehose');
  }

  console.log(`⚪️⚪️⚪️ ${chain.id} is deprecated or not released yet.`);
};

run();
