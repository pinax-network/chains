import bun from 'bun';

const fetchGraphIDs = async (): Promise<void> => {
  console.log('Fetching graph IDs...');
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
    console.log(graphIds.sort((a: string, b: string) => (a < b ? -1 : 1)));
  } catch (error) {
    console.error('Error fetching graph IDs:', error);
  }
};

fetchGraphIDs();
