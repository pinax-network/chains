const fs = require('fs');
const path = require('path');

// Define the directory containing the JSON files
const directoryPath = path.join(__dirname, '../..//data/chains');

// Read the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  let data = [];

  // Loop through all the files in the directory
  files.forEach((file) => {
    // Only process .json files
    if (path.extname(file) === '.json') {
      // Read the JSON file
      const fileData = fs.readFileSync(path.join(directoryPath, file));
      // Parse the file data as JSON and add it to the array
      data.push(JSON.parse(fileData));
    }
  });

  // Write the combined data to a new JSON file
  fs.writeFileSync(path.join('./', 'data.json'), JSON.stringify(data, null, 2));
});
