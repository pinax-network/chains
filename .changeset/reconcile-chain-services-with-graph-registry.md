---
'@pinax/chains': minor
---

Reconcile chain service availability with The Graph networks registry.

Deprecate services on 11 chains the registry shows no Pinax endpoint for
(arbnova, fantom, fuse, mode, moonbeam, moonriver, near, ronin, scroll, telos,
tron) and their affected testnets, and retire the Token API on wax. Mark
firehose, substreams and rpc as released on celo and x-layer, and rpc on zksync.

`deprecated_at` records the date this was reconciled, not the date each service
actually ended.
