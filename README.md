# Pinax Chains

Welcome to the Pinax Chains repository. This is the definitive source for the metadata of chains supported by Pinax **_products_**. Note that we maintain a separate, private list for internal operations.

To enhance accessibility, we offer the metadata as an [npm package](#install_from_npm) and provide a [public API endpoint](#public_endpoint) for fetching the data.

You can view details about the [Chain Type](/types/chain.types.ts) and explore our [list of supported, to-be-supported, or deprecated chains](/types/pinax.types.ts).

> **Note**: Some chains may be listed without supported services or may have been deprecated. Always check the chain's metadata to confirm its current support status.

## What's New

With the 2.0 release, we’ve made significant improvements to enhance developer and maintainer experience. Key updates include:

- ✅ Support for EVM chains
- ✅ Reintroduced TypeScript support
- ✅ Improved management of chain indexes (priority order)
- ✅ Consolidated chain utilities and service configurations across projects
- ✅ Automated checks for missing chain icons
- ✅ Simplified data model reflecting better relationships between chains, services, and networks
- ✅ Inclusion of beta chains
- ✅ Support for `unreleased` and `beta` services
- ✅ Eliminated redundant flags and information
- ✅ Integrated chains website into metadata
- And more...

## Installation

You first need to install [bun](https://bun.sh/).

### From npm

To install the package, run:

```bash
npm install @pinax/chains
```

### Public Endpoint

Access the chains metadata via the public API endpoint:

```bash
curl https://pinax.network/api/chains
```

### How to use

Please see [How to use](/docs/how_to_use.md) documentation for more information.

## Contributing

If you wish to contribute to the chain metadata, please open a pull request (PR) with your proposed changes. We will review and merge it if accurate. Be sure to consult the [documentation](/docs) before contributing.

## Releasing

See [RELEASING.md](/RELEASING.md) for more information.

