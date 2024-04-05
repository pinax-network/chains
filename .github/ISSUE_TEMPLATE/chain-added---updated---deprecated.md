---
name: Chain Added / Updated / Deprecated
about: Let us know of any change in supported chains or their data services.
title: Added/Update/Deprecate [CHAIN]
labels: ''
assignees: DominicF96, SoA432

---

## Add/Update Chain

Please provide the following information. See https://github.com/pinax-network/chains/issues/1 for more information.

```json
{
  "id": "alfajores",
  "index": 4,
  "graph_id": null,
  "name": "Alfajores",
  "url": "https://celo.org",
  "alt_names": [],
  "mainnet": "celo",
  "standard": "erc20",
  "block_type": {
    "label": "sf.ethereum.type.v2.Block",
    "url": "https://buf.build/streamingfast/firehose-ethereum/docs/main:sf.ethereum.type.v2"
  },
  "is_testnet": true,
  "supported_services": {
    "firehose": false,
    "substreams": false,
    "rpc": false
  }
}
```

## Deprecate Chain

Please provide the date of the deprecation.
