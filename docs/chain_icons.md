# Chain Icons

For our chain icons, we use [Edge & Node's Token Icons library](https://tokenicons.io/). The library is a collection of SVG icons for various blockchain tokens and chains. The library is available on [GitHub](https://github.com/0xa3k5/token-icons), [NPM](https://www.npmjs.com/package/@token-icons/react) and [Figma](https://www.figma.com/community/file/1355517329090639687/token-icons-community).

We wrote a script to leverage the library's metadata (in the final data.json generation script), to make sure that the chain icons are up-to-date with the latest changes.

The [copy_token_icons.ts script](../scripts/generate/V2/copy_token_icons.ts) iterates through our supported chains and makes sure that every mainnet has its associated token-icons logos. The script will attempt to retrieve the `branded` and `mono` versions of the chains logo. It will then copy those over and with the mono version of the logo create the `dark` and `light` variants. For more information, please read [chain_icons.md](./chain_icons.md).

If it can't find them, you'll receive an error and may need to provide an ID match in the script's code. 

See [copy_token_icons.ts](../scripts/generate/V2/copy_token_icons.ts) for more information.