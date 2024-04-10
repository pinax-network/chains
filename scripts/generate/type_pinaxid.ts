import fs from 'fs';
import path from 'path';

const chainsDir = path.join(__dirname, '../../src/data');
const typesDir = path.join(__dirname, '../../src/types');

const pinaxTypesFile = path.join(typesDir, 'pinax.types.ts');

console.log('🕑 Generating PinaxID type...');

// Function to recursively read directories and subdirectories
function readDir(directory: string): string[] {
  let fileNames: string[] = [];
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // If the file is a directory, recursively read it
      fileNames = fileNames.concat(readDir(filePath));
    } else if (
      path.extname(file) === '.ts' &&
      path.basename(file) === 'meta.ts'
    ) {
      // If the file is a .ts file named meta.ts, add the directory name to the array
      fileNames.push(path.basename(path.dirname(filePath)));
    }
  });

  return fileNames;
}

// Read the directory and subdirectories
const fileNames = readDir(chainsDir);

// Generate the PinaxId type definition
const pinaxIdType = `// This file is auto-generated on pre-commit to avoid maintaining it / circular dependencies.\n// Do not modify manually as it will be overwritten.\n// Last generation on ${new Date().toLocaleString()}.\nexport type PinaxID = '${fileNames.join("' | '")}'`;

// Write the PinaxId type definition to the types directory
fs.writeFile(pinaxTypesFile, pinaxIdType, (err) => {
  if (err) {
    console.error('Error writing pinax.types.ts file:', err);
    return;
  }

  console.log('✅ Successfully generating PinaxID type!');
});
