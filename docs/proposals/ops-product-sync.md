# OPS-Product Sync

## Summary

This document is a proposal for syncing the OPS and Product teams. The goal is to ensure that the metadata of chains supported by Pinax products is up-to-date and accurate. This process is crucial in ensuring that the product team has the necessary information to maintain the products.

> WIP: This document is a work in progress and is subject to change.
>
> exact schedule for blockchain to be deployed exists
There are different sources
Jonathan prioritizes chains on 'easy' wins
YAML/JSON doesn't mean its ready
>
> -->> Once a blockchain is ready, DNS record (another yaml file in repo) <<--
Doesn't mean blockchain is backuped, stable, etc. Maybe OK for use by The Graph.
>
> Automation might not be as straightforward
>
> Requirements for The Graph are different than requirements from public use.
>
> Fully operationnal chains tracked in Google Sheets
>
> Sajjad handles backups

## Background

The OPS team maintains a private list (in a YAML file in the OPS Github organization) of chains supported or to-be-supported by Pinax. This list needs to be maintained as it triggers a series of automations on the ops side.

The Product team maintains this repository, which acts as the single-source-of-truth for Pinax products. It contains extra metadata that is not present in the OPS list, such as chain icons, __chain services__, and other product-specific information.

Those two lists are already necessary for their respective teams.

The OPS team also maintains a Notion page on The Graph's side, which contains the list of chains supported by Pinax products.

### Data duplication

To further avoid maintaining the same data in two different places, here's the data that each team currently maintains. It would be beneficial to understand which team is responsible for which piece of data.

#### OPS Team

##### Chain Metadata

```json
{
  "status": "TBD"
}
```

##### The Graph Notion Page

TBD

#### Product Team

```json
{
    "id": "eth",
    "graph_id": "mainnet",
    "name": "Ethereum",
    "alt_names": [],
    "index": 0,
    "standard": "erc20",
    "block_type": {
      "label": "sf.ethereum.type.v2.Block",
      "url": "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
    },
    "icon": {
      "id": "networks/ethereum",
      "brand_theme": "both",
      "variants": [
        "branded",
        "mono"
      ]
    },
    "supported_services": {
      "firehose": {
        "released_at": "2023-12-01T00:00:00.000Z",
        "deprecated_at": null
      },
      "substreams": {
        "released_at": "2023-12-01T00:00:00.000Z",
        "deprecated_at": null
      },
      "rpc": {
        "released_at": "2023-12-01T00:00:00.000Z",
        "deprecated_at": null
      }
    },
    "testnets": [
      // Array of simplified chain objects
    ],
    "consensus": [
      // Array of simplified chain objects
    ],
    "evms": [
      // Array of simplified chain objects
    ],
  }
```

## Proposal

The proposal is for the OPS team to expose the metadata of chains supported by Pinax products as a public endpoint.

The OPS team will maintain the private list as they do now and a GitHub Action, which will automatically update the public endpoint's data.

The Product team can then leverage the public endpoint and Github Actions on their side too.

Depending on the data the OPs team can provide and if The Graph accepts it, the Product team could work on an automated alternative to the current manual process of updating the Notion page.