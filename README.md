# Pinax Chains Metadata

> ⚠️ This single source of truth is currently (2024-03-01) being implemented. Breaking changes may still occur in the metadata. Please use with caution.

This repository is the single-source-of-truth for the metadata of chains supported by Pinax. To make it more accessible, we've published it as a private npm package ([See below](#install_from_npm)) and created a public endpoint to fetch publicly available chains metadata ([See below](#public_endpoint)).

You can have a look at the [Chain Type](/types/chain.types.ts) and at our [list of supported, to-be-supported, or once-supported chains](/data/chains/index.ts). 

**Note**: Some chains may be listed but won't have any service supported or may have been deprecated, see each chain's metadata to ensure the chain is truly supported.

## Install from npm

```bash
npm install @pinax/chains-metadata
```

## Public Endpoint

You can fetch the publicly available chains metadata from the following endpoint:

```bash
curl https://pinax.network/api/chains
```

## Contributing

If you want to contribute to the metadata of chains, please open a PR with the changes you want to make. We'll review it and merge it if it's correct.

### Adding a new chain

Adding a new chain is as simple as adding a new file to the `data/chains` directory. The file should be named after the chain's official Pinax ID and should contain the metadata of the chain.

If you're unsure about the fields you need to fill, you can have a look at the [Chain Type](/types/chain.types.ts) to learn more about the fields you need to fill.

### Updating an existing chain

To update an existing chain, you can simply open a PR with the changes you want to make to the chain's metadata.

### Updating the Chain Type

If you want to add a new field to the chain type, you can simply open a PR with the changes you want to make to the chain type and make sure every chain's metadata is updated to include the new field if required.

Removing a field from the chain type is not recommended, as it may break the metadata of the chains. If you want to remove a field, please open an issue to discuss it first.

### Removing a chain

If a chain is no longer supported, simply set the `deprecated_at` field as the date of the deprecation. This allows the different services to know when to stop supporting the chain, and enables us to keep track of the chains we've supported in the past for proper redirects and such.