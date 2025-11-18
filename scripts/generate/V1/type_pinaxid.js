const fs = require('node:fs');
const path = require('node:path');

const chainsDir = path.join(__dirname, '../../data/chains');
const typesDir = path.join(__dirname, '../../types');

const excludedFile = 'index.ts';
const pinaxTypesFile = path.join(typesDir, 'pinax.types.ts');

console.log('Generating PinaxId type...');

// Scan the chains directory
fs.readdir(chainsDir, (err, files) => {
  if (err) {
    console.error('Error reading chains directory:', err);
    return;
  }

  // Filter out the excluded file
  const filteredFiles = files.filter((file) => file !== excludedFile);

  // Extract the file names without the extension
  const fileNames = filteredFiles.map((file) => path.parse(file).name);

  // Generate the PinaxId type definition
  const pinaxIdType = `// This file is auto-generated on pre-commit to avoid maintaining it / circular dependencies.\n// Do not modify manually as it will be overwritten.\n// Last generation on ${new Date().toLocaleString()}.\nexport type PinaxId = '${fileNames.join("' | '")}'`;

  // Write the PinaxId type definition to the types directory
  fs.writeFile(pinaxTypesFile, pinaxIdType, (err) => {
    if (err) {
      console.error('Error writing pinax.types.ts file:', err);
      return;
    }

    console.log('✅ Generating PinaxId type');
  });
});
