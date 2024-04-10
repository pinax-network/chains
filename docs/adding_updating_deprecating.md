### Adding a new chain

Adding a new chain is as simple as adding a new file to the `src/data/chains` directory. The file should be named after the chain's official Pinax ID and should contain the metadata of the chain. The chain files are in Typescript, so make sure to cast them to the appropriate type to get the proper validations.

Also make sure to run the `npm run generate:type_pinaxid` and `npm run generate:data_json` commands to update the related types and index if you're encountering any type issue there.

If you're unsure about the fields you need to fill, you can have a look at the [Chain Type](/src/types/chain.types.ts) to learn more about the fields you need to fill.

### Updating an existing chain

To update an existing chain, you can simply open a PR with the changes you want to make to the chain's metadata.

### Adding / Validating Graph IDs

We use the `graph_id` field to match our chains to The Graph's. You can check the available graph IDs in the [Graphs](/src/types/graph.types.ts) file, which is [generated automatically](/scripts/generate/graphid_type.js) by fetching supported chains from The Graph's API. You can run `npm run generate:type_graphid` to update the graph IDs.

### Updating the Chain Type

If you want to add a new field to the chain type, you can simply open a PR with the changes you want to make to the chain type and make sure every chain's metadata is updated to include the new field if required.

Removing a field from the chain type is not recommended, as it may break the metadata of the chains. If you want to remove a field, please open an issue to discuss it first.

### Removing a chain

If a chain data stream is no longer supported, simply set the `deprecated_at` field as the date of the deprecation. This allows the different services to know when to stop supporting the chain, and enables us to keep track of the chains we've supported in the past for proper redirects and such.