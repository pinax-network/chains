# pinax-network/chains — agent contract

This package publishes `@pinax/chains`: the metadata for chains Pinax **products** support —
display names, icons, priority ordering, and per-service release/deprecation dates. A separate
private list covers internal operations.

**What it is not:** a record of which chains Pinax serves *today*. Nothing syncs this package to
anything. It is hand-maintained, and it has drifted in both directions — advertising chains that
were retired and omitting chains that were live. Reconcile against
[The Graph networks registry](https://github.com/graphprotocol/networks-registry) before trusting
any entry (`public/TheGraphNetworksRegistry_v0_x_x.json`: Pinax RPC appears in each network's
`rpcUrls`, Firehose/Substreams/Token API under `services`), and cross-check
`https://pinax.network/chain/<id>`.

## Everything under `data/chains/V2/` except `meta.ts` is generated

Edit `data/chains/V2/<chain>/meta.ts` and regenerate. Never hand-edit `chains.json`,
`data/chains/V2/index.ts`, `types/graph.types.ts` or `types/pinax.types.ts`.

```sh
bun run generate     # index config → data index → types → chains.json → icons → format
```

CI does **not** regenerate: it runs build, typecheck and lint only, so the generated artifacts
must be committed by the contributor.

Without `bun`, the generators are plain Node and run under `tsx` in this order:

```sh
npx tsx scripts/generate/V2/index_config_check.ts   # must report: missingChains []
npx tsx scripts/generate/V2/data_index.ts
npx tsx scripts/generate/V2/type_graphid.ts
npx tsx scripts/generate/V2/type_pinaxid.ts
npx tsx scripts/generate/V2/data_json.ts
npx biome check --write --unsafe .                  # chains.json is biome-formatted after generation
```

`data_json.ts` writes `JSON.stringify(data, null, 2)` and biome then re-inlines short arrays, so
re-serializing `chains.json` with any other tool produces a whole-file diff. To confirm a toolchain
reproduces the committed artifact, regenerate **before** making changes and check `git diff` is
empty.

## Layout

| Path | Role |
|---|---|
| `data/chains/V2/<chain>/meta.ts` | the editable source for a mainnet |
| `data/chains/V2/<chain>/testnets/<id>/meta.ts` | a testnet, typed `___InternalTestnet` |
| `data/chains/V2/<chain>/<chain>.{branded,mono}.svg` | icons, downloaded by the generator |
| `data/index.config.ts` | priority order; new chains must be added by hand |
| `data/chains/V2/chains.json` | generated artifact — the published data |

A chain absent from `index.config.ts` makes `index_config_check.ts` exit 1 rather than silently
omitting it.

## Services

`supported_services` carries three dates per service — `beta_released_at`, `full_released_at`,
`deprecated_at`. A service counts as live when one of the release dates is set and
`deprecated_at` is null. Retiring a chain means setting `deprecated_at` on **every** live service,
including on its testnets, which are separate files and easy to miss.

Set the dates you actually know. Where a real date is unrecoverable, `docs/api_deprecation.md`
sanctions the current date: consumers only test presence and past-ness via `isServiceDeprecated`,
so the behaviour is right even when the history is approximate. Say so in the PR rather than
implying the date is the real one.

## `icon.id` is the web3icons name, not the chain id

The generator downloads
`https://raw.githubusercontent.com/0xa3k5/web3icons/main/raw-svgs/<type>/<variant>/<icon.id>.svg`,
so `icon.id` is a remote filename: `eth` → `ethereum`, `bsc` → `binance-smart-chain`,
`megaeth` → `mega-eth`. A mismatch fails as a 404 during generation, never as a validation error.
Confirm the name under
[raw-svgs/networks](https://github.com/0xa3k5/web3icons/tree/main/raw-svgs/networks); if the chain
is absent, set `icon.type: 'missing'`, supply the SVGs by hand, and the generator will skip it.

`brand_theme` describes the backgrounds the **branded** mark reads against — `light` for a dark
mark, `dark` for a light one, `both` for a coloured or self-contained one. It cannot be derived
from the file; check the mark rather than guessing from the name.

## Releasing

Changesets. Add one on the feature branch (`bun run changeset`, or write the file by hand) and
commit it with the change; see `RELEASING.md`. Version bumps and publishing happen on `main`
afterwards, not in the PR.

## Validation

```sh
npx tsc --noEmit
npx biome check .
```

`run-grpcurl` is a required check that probes live Firehose and Substreams endpoints without
credentials. It has failed on every run since at least 2026-09-14, on `eth`, because the endpoint
rejects the unauthenticated reflection call with a 400. A red `run-grpcurl` is therefore not
evidence that your change broke anything — and it blocks merges, including dependency updates.
Confirm against recent runs on other branches before investigating it as yours.
