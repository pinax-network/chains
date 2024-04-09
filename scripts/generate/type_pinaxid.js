const fs = require('fs');
const path = require('path');

const chainsDir = path.join(__dirname, '../../src/data');
const typesDir = path.join(__dirname, '../../src/types');

const excludedFile = 'index.ts';
const pinaxTypesFile = path.join(typesDir, 'pinax.types.ts');

console.log('Generating PinaxId type...');

// Function to recursively read directories and subdirectories
function readDir(directory) {
  let fileNames = [];
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If the file is a directory, recursively read it
      fileNames = fileNames.concat(readDir(filePath));
    } else if (
      path.extname(file) === '.json' &&
      path.basename(file) === 'meta.json'
    ) {
      // If the file is a JSON file named meta.json, add the directory name to the array
      fileNames.push(path.basename(directory));
    }
  });

  return fileNames;
}

// Read the directory and subdirectories
const fileNames = readDir(chainsDir);

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
