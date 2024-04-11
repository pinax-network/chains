# Pinax Chains

This is the single-source-of-truth for the metadata of chains supported by Pinax **_products_** (we have a separate, private list for internal ops). To make it more accessible, we've published it as a [npm package](#install_from_npm) and created a [public endpoint to fetch chains metadata](#public_endpoint).

You can have a look at the [Chain Type](/src/types/chain.types.ts) and at our [list of supported, to-be-supported, or once-supported chains](/src/types/pinax.types.ts). 

> **Note**: Some chains may be listed but won't have any service supported or may have been deprecated, see each chain's metadata to ensure the chain is truly supported.

## What's New

With the 2.0 release, we've done massive changes to improve QoL for developers and maintainers. The most important changes are;

- ✅ Easier sort of chains while keeping mainnets, testnets and consensus layer together
- ✅ Easier to understand relationship between networks (mainnets, testnets, consensus layers, ...) as a newcomer
- ✅ Easier to manage chain indexes (priority order)
- ✅ No more desync of chain icons metadata and source
- ✅ No more need to copy-paste the chains utils between multiple projects, it's packaged here
- ✅ No more need to copy-paste the service configs between multiple projects, it's packaged here
- ✅ No more need to maintain a bunch of flags that can be extrapolated from data
- ✅ No more duplicated information in mainnets and subnets
- ✅ Enabling chain icons to work on local environments (no longer loading from prod)
- ✅ Github Action automations making sure certain parts of the data is always up-to-date

## Installation

### From npm

```bash
npm install @pinax/chains
```

### Public Endpoint

You can fetch the publicly available chains metadata from the following endpoint:

```bash
curl https://pinax.network/api/chains
```

## Contributing

If you want to contribute to the metadata of chains, please open a PR with the changes you want to make. We'll review it and merge it if it's correct. Make sure to read any relevant [documentation](/docs) before contributing.
