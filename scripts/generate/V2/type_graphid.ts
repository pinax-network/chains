import fs from 'node:fs';
import path from 'node:path';
import { NetworksRegistry } from '@pinax/graph-networks-registry';

const typesDir = path.join(__dirname, '../../../types');
const graphTypesFile = path.join(typesDir, 'graph.types.ts');

console.log('🕑 Generating GraphID type...');

const fetchGraphIDs = async (): Promise<void> => {
  try {
    const registry = await NetworksRegistry.fromLatestVersion();
    const graphIds = registry.networks.map((network) => network.id);
    const sortedGraphIds = graphIds.sort((a: string, b: string) =>
      a < b ? -1 : 1,
    );

    // Generate the GraphId type definition
    const graphIdType = `// This file is auto-generated on pre-commit to avoid maintaining it.\n// Do not modify manually as it will be overwritten.\n// Last generation on ${new Date().toLocaleString()}.\nexport type GraphID = '${sortedGraphIds.join("' | '")}'`;

    // Write the GraphId type definition to the types directory
    fs.writeFile(graphTypesFile, graphIdType, (err) => {
      if (err) {
        console.error('Error writing graph.types.ts file:', err);
        return;
      }

      console.log('✅ Successfully generated GraphID type!');
    });
  } catch (error) {
    console.error('Error fetching graph IDs:', error);
  }
};

fetchGraphIDs();
