const fs = require("fs");
const path = require("path");

const chainsDir = path.join(__dirname, "../data/chains");

process.stdout.write("Filling chains data...");

const files = fs.readdirSync(chainsDir);
files.forEach((file) => {
  const chainData = require(path.join(chainsDir, file));
  const chainName = file.slice(0, -3);
  chainData.chain = chainName;
  fs.writeFileSync(
    path.join(chainsDir, file),
    JSON.stringify(chainData, null, 2),
  );
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write("✅ Filling chains data");
});
