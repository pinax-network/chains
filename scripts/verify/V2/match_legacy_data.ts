import fs from 'node:fs';

interface Chain {
  id: string;
  mainnet: string;
  testnets: Array<Chain>;
  consensus: Array<Chain>;
  evms: Array<Chain>;
}

// Read and parse the JSON files
const dataLegacy = JSON.parse(
  fs.readFileSync('./dist/data_legacy.json', 'utf8'),
) as Array<Chain>;
const data = JSON.parse(fs.readFileSync('./dist/data.json', 'utf8'));

// Create a new array for the missing chain IDs
const missingChainIDs = [];

// Iterate over the chains in data_legacy.json
for (const legacyChain of dataLegacy) {
  // Find the corresponding chain in data.json
  const chain = data.find((c: Chain) => c.id === legacyChain.id);

  // If the chain doesn't exist in data.json, check the mainnet of the chain
  if (!chain) {
    const mainnetChain = data.find((c: Chain) => c.id === legacyChain.mainnet);
    if (mainnetChain) {
      // Check both testnets and consensus arrays within that mainnet
      if (
        mainnetChain.testnets?.find((t: Chain) => t.id === legacyChain.id) !==
        undefined
      ) {
        continue;
      }
      if (
        mainnetChain.consensus?.find((c: Chain) => c.id === legacyChain.id) !==
        undefined
      ) {
        continue;
      }
    }
    // If the chain doesn't exist in data.json, add the legacy chain ID to the missingChainIDs array
    missingChainIDs.push(legacyChain.id);
  }
}

// Log the missing chain IDs
console.log(missingChainIDs);
