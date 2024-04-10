# Retrieve The Graph Chain IDs

This process is useful to add a supported chain to the app, as we need to make sure that the chain is available on The Graph to provide a valid TOML quickstart config. GraphID type is automatically updated daily by a GitHub Action, so in most cases you don't need to worry about it.

In the case that the chain is not available on The Graph, we set its `graph_id` to null, so that the TOML config shows `This chain is not supported by The Graph Network`.

## Steps to retrieve The Graph Chain IDs

**OPTION A: Run `npm run fetch-graph-ids.js` in the project**

1. Clone the repository
2. At the root of the project, run `npm run fetch-graph-ids`

**OPTION B: CURL**

1. Fetch The Graph Supported Chains
   - **Option A**: Install [JQ](https://jqlang.github.io/jq/) and run cURL command `curl -X POST -H "Content-Type: application/json" -d '{ "jsonrpc": "2.0", "method": "chain_list", "id": 1 }' https://api.studio.thegraph.com/deploy | jq`
   - **Option B**: Use your favorite HTTP Client to retrieve it:
   ```json
   {
      "url": "https://api.studio.thegraph.com/deploy",
      "headers": {
         "Content-Type": "application/json"
      },
      "body": {
	      "jsonrpc": "2.0",
	      "method": "chain_list",
	      "id": 1
      }
   }
   ```
2. See if you can find a chain ID matching the chain you are adding to the app under "hostedService"
3. If you can't find any matching ID, the added chain will have `graph_id: null`, otherwise the chain ID