const fetchGraphIDs = () => {
  console.log("Fetching graph IDs...");
  fetch("https://api.studio.thegraph.com/deploy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "chain_list",
      id: 1,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      let graphIds = res.result.studio;
      console.log(graphIds.sort((a, b) => (a < b ? -1 : 1)));
    });
};

fetchGraphIDs();
