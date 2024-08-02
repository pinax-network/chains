# Notion CSV Diff Tool

This tool is used to compare the data that we have here against the Notion database that the broader team maintains. It is used to ensure that the data we have is up to date and accurate.

## What it does

- ✅ Show missing chains
- ✅ Shows the different in service statuses

## How to use

1. Export the Blockchain Service Matrix CSV;
   1. Go on Notion [Blockchain Service Matrix](https://www.notion.so/pinaxnetwork/bfec60491b1d48509980ef69e31e7651?v=93922339441443698c3ebc8a695b61bd);
   1. Click on the three dots on the top right corner;
   1. Click on `Export`, and `Export` again (Markdown & CSV);
1. Place the exported CSV in the `notion-diff/input` folder (only one file at a time);
1. Run the script with `npm run notion-diff`;
1. The script will output the differences between the data we have and the Notion database.