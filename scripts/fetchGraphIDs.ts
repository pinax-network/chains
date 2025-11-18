import { NetworksRegistry } from '@pinax/graph-networks-registry';

const fetchGraphIDs = async (): Promise<void> => {
  console.log('Fetching graph IDs...');
  const registry = await NetworksRegistry.fromLatestVersion();

  const graphIds = registry.networks.map((network) => network.id);
  console.log(graphIds.sort((a: string, b: string) => (a < b ? -1 : 1)));
};

fetchGraphIDs();
