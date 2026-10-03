# Chain Icons

Chain icons come from [web3icons](https://github.com/0xa3k5/web3icons) (MIT), the successor to
Edge & Node's Token Icons library. `@token-icons/core` was renamed to `@web3icons/core`; the old
package is deprecated on npm and last published in August 2024, so it no longer carries recently
added chains.

[`generate_token_icons.ts`](../scripts/generate/V2/generate_token_icons.ts), run by
`npm run generate:new_icons` as part of `generate`, reads `chains.json` and downloads each chain's
declared `icon.variants` from the web3icons repository:

```
https://raw.githubusercontent.com/0xa3k5/web3icons/main/raw-svgs/<type>/<variant>/<icon.id>.svg
```

## `icon.id` is the web3icons name, not the chain id

This is the detail that bites. The downloaded filename is `icon.id`, which often differs from our
own chain `id`:

| Our `id` | `icon.id` |
|---|---|
| `eth` | `ethereum` |
| `bsc` | `binance-smart-chain` |
| `arbone` | `arbitrum-one` |
| `hyperevm` | `hyper-evm` |
| `megaeth` | `mega-eth` |

Check the name against
[raw-svgs/networks](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks) when adding a
chain. A mismatch fails as a 404 during generation, not as a validation error.

## When a chain has no web3icons entry

Set `icon.type: 'missing'`, supply the SVGs by hand, and the generator will skip it rather than
overwrite them.
