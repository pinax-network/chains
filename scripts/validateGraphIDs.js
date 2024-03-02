// TODO: fix commonjs attempt to import typescript
import * as chains from "../data/chains";

const validateGraphIDs = () => {
  console.log("Fetching graph IDs...");
  fetch('https://api.studio.thegraph.com/deploy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "jsonrpc": "2.0",
      "method": "chain_list",
      "id": 1
    }),
  }).then((res) => res.json())
    .then((res) => {
      let graphIds = res.result.studio

      chains.forEach((chain) => {
        if (chain.graph_id) {
          if (!graphIds.includes(chain.graph_id)) {
            console.error(`Chain ${chain.name} has an invalid graph ID: ${chain.graph_id}`);
          }
        }
      });
    });
};

validateGraphIDs();