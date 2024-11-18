// Run after `npm run generate:data`
import fs from 'fs';
import path from 'path';

interface Icon {
  id: string;
  variants: string[];
}

interface Network {
  id: string;
  icon: Icon;
}

interface Token {
  id: string;
  symbol: string;
  variants: string[];
}

// Define the source directories and files
const tokenIconDistDir: string = './node_modules/@token-icons/core/dist';
const tokenIconMetaDir: string = `${tokenIconDistDir}/metadata`;
const tokenIconNetworksMetaPath: string = `${tokenIconMetaDir}/networks.json`;
const tokenIconTokensMetaPath: string = `${tokenIconMetaDir}/tokens.json`;
const tokenIconNetworkSvgsDir: string = `${tokenIconDistDir}/svgs/networks`;
const tokenIconTokenSvgsDir: string = `${tokenIconDistDir}/svgs/tokens`;

// Define the destination directory for the icons
const destDir = (chainID: string) => `./data/chains/V2/${chainID}`;

// Read and parse the chains.json file
const chains = JSON.parse(
  fs.readFileSync('./data/chains/V2/chains.json', 'utf-8'),
);

const tiUnavailableIcons = [
  // Those icons are not available in Token Icons
  'networks/ore',
  'networks/ux',
  'tokens/neweos',
];

// Token Icon Exceptions, where metadata ID
// does not match the SVG ID
const tiExceptions = [
  ['networks/optimistic-ethereum', 'optimism'],
  ['networks/binance-smart-chain', 'binance-smart-chain'], // Don't split at hyphen for bsc
  ['networks/zora-network', 'zora'],
  ['networks/x-layer', 'x-layer'], // Don't split at hyphen for x-layer
];

const iconIsUnavailable = (iconId: string) => {
  return tiUnavailableIcons.includes(iconId);
};

const tokens: Token[] = JSON.parse(
  fs.readFileSync(path.resolve(tokenIconTokensMetaPath), 'utf8'),
);

const networks: Network[] = JSON.parse(
  fs.readFileSync(path.resolve(tokenIconNetworksMetaPath), 'utf8'),
);

const matchMetaToSVGIDs = (metaIconID: string, exceptions: string[][]) => {
  // Find if metaIconID is in exceptions
  const exception = tiExceptions.find(([id]) => id === metaIconID);

  // If it is, return the second element of the exception array
  if (exception) {
    return exception[1];
  }

  // If it's not in exceptions, split at '/' and '-' and return the first element after the split
  return metaIconID.split('/')[1].split('-')[0];
};

const checkIconMetaForChain = (chain: any) => {
  if (!chain.icon) {
    // Ignore chains without icons (typically subnets)
    return;
  }

  if (iconIsUnavailable(chain.icon.id)) {
    return;
  }

  if (chain.icon.id.indexOf('tokens') !== -1) {
    const iconMeta = tokens.find(
      (token) => token.symbol === chain.icon.id.split('/')[1],
    );
    if (iconMeta) {
      chain.icon.variants = iconMeta.variants;
    } else {
      const warnMsg = `⚠️  Could not find icon meta for '${chain.icon.id}'`;
      warnings.push(`(${warnings.length + 1}) ${warnMsg}`);
    }
  } else {
    const iconMeta = networks.find(
      (network) => network.id === chain.icon.id.split('/')[1],
    );
    if (iconMeta) {
      // @ts-ignore
      chain.icon.variants = iconMeta.variants;
    } else {
      const warnMsg = `⚠️  Could not find icon meta for '${chain.icon.id}'`;
      warnings.push(`(${warnings.length + 1}) ${warnMsg}`);
    }
  }
};

const warnings: string[] = [];

console.log('🕑 Copying chain icons from token-icons...');

// Iterate over each chain
for (const chain of chains) {
  checkIconMetaForChain(chain);

  const iconBasePath: string =
    chain.icon.id.split('/')[0] === 'networks'
      ? tokenIconNetworkSvgsDir
      : tokenIconTokenSvgsDir;

  // Define the paths to the icon variants
  const brandedIconPath: string = path.join(
    iconBasePath,
    'branded',
    `${matchMetaToSVGIDs(chain.icon.id, tiExceptions)}.svg`,
  );
  const monoIconPath: string = path.join(
    iconBasePath,
    'mono',
    `${matchMetaToSVGIDs(chain.icon.id, tiExceptions)}.svg`,
  );

  // Define the destination file paths
  const destBrandedIconPath: string = path.join(
    destDir(chain.id),
    `${chain.id}.branded.svg`,
  );
  const destLightIconPath: string = path.join(
    destDir(chain.id),
    `${chain.id}.light.svg`,
  );
  const destDarkIconPath: string = path.join(
    destDir(chain.id),
    `${chain.id}.dark.svg`,
  );

  if (chain.icon.variants.includes('branded')) {
    // Copy the branded icon to the destination directory
    if (fs.existsSync(brandedIconPath)) {
      fs.copyFileSync(brandedIconPath, destBrandedIconPath);
    } else {
      if (!iconIsUnavailable(chain.icon.id)) {
        console.log(brandedIconPath);
        const warnMsg = `⚠️  Branded icon not found for ${chain.id}`;
        warnings.push(`(${warnings.length + 1}) ${warnMsg}`);
      }
    }
  }

  if (chain.icon.variants.includes('mono')) {
    if (fs.existsSync(monoIconPath)) {
      // Create the light icon by replacing '#fff' with '#fffffe' in the mono icon
      let monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
      let lightIconContent = monoIconContent.replace(/#fff/g, '#fffffe');
      fs.writeFileSync(destLightIconPath, lightIconContent);

      // Create the dark icon by replacing '#fff' with '#000001' in the mono icon
      monoIconContent = fs.readFileSync(monoIconPath, 'utf-8');
      let darkIconContent = monoIconContent.replace(/#fff/g, '#000001');
      fs.writeFileSync(destDarkIconPath, darkIconContent);
    } else {
      if (!iconIsUnavailable(chain.icon.id)) {
        const warnMsg = `⚠️  Mono icon not found for ${chain.id}`;
        warnings.push(`(${warnings.length + 1}) ${warnMsg}`);
      }
    }
  }
}

if (warnings.length) {
  console.log(warnings.join('\n'));
  console.log(
    `☑️  Copied chain icons from token-icons with ${warnings.length} warnings.`,
  );
} else {
  console.log(`✅ Successfully copied chain icons from token-icons!`);
}
