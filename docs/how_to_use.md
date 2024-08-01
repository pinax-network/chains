# How to Use the Chains Repository

This file is the best place to learn everything there is to know about the chains repository! Feel free to use this as a quickstart guide or as a reference as you work inside the project.

## Content

- [Metadata Updates](#metadata-updates)
   - [Adding a new chain](#adding-a-new-chain)
   - [Updating an Existing Chain](#updating-an-existing-chain)
   - [Deprecating a Chain](#deprecating-a-chain)
- [Scripts](#scripts)
   - [Script: Copy Token Icons](#script-copy-token-icons)
   - [Script: Data Index](#script-data-index)
   - [Script: Index Config Check](#script-index-config-check)
   - [Script: Graph IDs Type](#script-graph-ids-type)
   - [Script: Pinax IDs Type](#script-pinax-ids-type)
- [Types](#types)
   - [Typing & Updating Auto-Generated Types](#typing--updating-auto-generated-types)
   - [Updating the Chain Type](#updating-the-chain-type)

## Metadata Updates

In this section, you'll learn all you need to update the chains metadata, to either add newly supported chains by Pinax, deprecated chains, etc.

### Adding a new chain

Adding a new chain is as simple as adding a new file under the `data/chains/V2` directory (we're deprecating V1). The folder structure should respect the following;

```
/data/chains/V2
├── MAINNET_ID/
│   ├── meta.ts # Metadata of the Mainnet
│   ├── MAINNET_ID.branded.svg # Auto-generated Token-icons
│   ├── MAINNET_ID.dark.svg
│   ├── MAINNET_ID.light.svg
│   ├── consensus/
│   │   ├── TESTNET_ID/
│   │   ├── meta.ts # Metadata of the consensus subnet (can be testnets)
│   │   └── ...
│   ├── evms/
│   │   ├── EVM_ID/
│   │   ├── meta.ts # Metadata of the EVM subnet
│   │   └── ...
│   ├── testnets/
│   │   ├── TESTNET_ID/
│   │   ├── meta.ts # Metadata of the testnet
│   │   └── ...
│   └──
└── ...
```

The folders should be named after the chain's official Pinax ID and should contain the `meta.ts` file describing the chain.

### Updating an Existing Chain

To update an existing chain, you can simply open a PR with the changes you want to make to the chain's metadata.

### Deprecating a Chain

If a chain data stream is no longer supported, simply set the `deprecated_at` field as the date of the deprecation. This allows the different services to know when to stop supporting the chain, and enables us to keep track of the chains we've supported in the past for proper redirects and such.

## Scripts

As maintaining this huge list of chain can become challenging and repetitive, we've developed a few scripts to help automate certain tasks. You can review those scripts under the `/scripts` folder, but we'll summarize what they do here;

### Generation Scripts

Generation scripts use external data or project structure to extrapolate data to automate repetitive tasks.

#### Script: Copy Token Icons

This script iterates through our supported chains and makes sure that every mainnet has its associated token-icons logos. The script will attempt to retrieve the `branded` and `mono` versions of the chains logo. It will then copy those over and with the mono version of the logo create the `dark` and `light` variants. For more information, please read [chain_icons.md](./chain_icons.md).

#### Script: Data Index

This script maintains the index.ts file exporting all `meta.ts` from the `/data/chains/V2` folder (and nested folders), so we don't have to worry about unexported chains.

#### Script: Index Config Check

This script validates that every chain was placed in the `index.config.ts`, to be given a unique, prioritized index relative to other chains. If any chains are found in the `/data/chains/V2` folder but isn't configured in the `index.config.ts` file, it will throw an error and add those missing chains in the `missing` array of the file.

#### Script: Graph IDs Type

This script fetches The Graph endpoint of supported chains and updates our type definition for valid Graph network IDs.

#### Script: Pinax IDs Type

This script iterates through the files in the `/data/chains/V2` and updates our type definition for valid Pinax network IDs.


#### Script Automation

All of those scripts are defined in the `package.json`, so you can run them manually by using NPM commands. You may find that you need to need some scripts manually, one good example being `generate:type_pinaxid` and `generate:type_graphid` while adding new chains.

But in most cases, you shouldn't have to worry to much about those scripts, they're run pre-commit, so everything _**should**_ update automagically, otherwise you'll receive errors explaning the steps that needs to be taken.

### Verification Scripts

For now, no verification script is implemented, but it would be a good idea to implement a script that can check our metadata against [Notion's Blockchain Service Matrix](https://www.notion.so/pinaxnetwork/bfec60491b1d48509980ef69e31e7651?v=93922339441443698c3ebc8a695b61bd) (or whatever chosen selected single-source-of-truth for Pinax-supported chains). The folder structure for such a script is already there, but the scripts would need to be implemented.

## Types

Core types are located under `/types/`. Make sure to review those files to familiarize yourself with the data format we enforce for mainnets and their subnets.

### Typing & Updating Auto-Generated Types

The chain files are in Typescript, so make sure to cast them to the appropriate type to get the proper validations (Chain, Testnet, Consensus).

Also make sure to run the `npm run generate:type_pinaxid` and `npm run generate:data_json` commands to update the related types and index if you're encountering any ID type issue there.

If you're unsure about the fields you need to fill, you can have a look at the [Chain Type](/types/chain.types.ts) to learn more about the fields you need to fill.

### Updating the Chain Type

If you want to add a new field to the chain type, you can simply open a PR with the changes you want to make to the chain type and make sure every chain's metadata is updated to include the new field if required.

Removing a field from the chain type is not recommended, as it may break the metadata of the chains. If you want to remove a field, please open an issue to discuss it first.