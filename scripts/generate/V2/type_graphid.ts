import fs from 'fs';
import path from 'path';

const typesDir = path.join(__dirname, '../../../types');
const graphTypesFile = path.join(typesDir, 'graph.types.ts');

console.log('🕑 Generating GraphID type...');

const fetchGraphIDs = async (): Promise<void> => {
  try {
    const res = await fetch('https://api.studio.thegraph.com/deploy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'chain_list',
        id: 1,
      }),
    });

    const data = await res.json();
    let graphIds = data.result.studio;
    let sortedGraphIds = graphIds.sort((a: string, b: string) =>
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
