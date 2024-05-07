import fs from 'fs';

// Read and parse the JSON files
const dataLegacy = JSON.parse(
  fs.readFileSync('./dist/data_legacy.json', 'utf8'),
);
const data = JSON.parse(fs.readFileSync('./dist/data.json', 'utf8'));

// Create a new array for the missing chain IDs
let missingChainIDs = [];

// Iterate over the chains in data_legacy.json
for (let legacyChain of dataLegacy) {
  // Find the corresponding chain in data.json
  let chain = data.find((c: any) => c.id === legacyChain.id);

  // If the chain doesn't exist in data.json, check the mainnet of the chain
  if (!chain) {
    let mainnetChain = data.find((c: any) => c.id === legacyChain.mainnet);
    if (mainnetChain) {
      // Check both testnets and consensus_layers arrays within that mainnet
      if (
        mainnetChain.testnets?.find((t: any) => t.id === legacyChain.id) !==
        undefined
      ) {
        continue;
      }
      if (
        mainnetChain.consensus_layers?.find(
          (c: any) => c.id === legacyChain.id,
        ) !== undefined
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
