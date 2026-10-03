---
'@pinax/chains': patch
---

Correct `icon.id` for hyperevm and megaeth, which must carry the web3icons name
(`hyper-evm`, `mega-eth`) rather than our own chain id, and remove the
deprecated `@token-icons/core` dependency along with the unused
`copy_token_icons.ts` script that read it.
