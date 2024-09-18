const affectedChains = [
  {
    id: 'cosmoshub',
    affected_services: ['firehose', 'substreams'],
    standard: 'cosmos',
  },
  {
    id: 'theta',
    affected_services: ['firehose', 'substreams'],
    standard: 'cosmos',
  },
  {
    id: 'osmosis',
    affected_services: ['firehose', 'substreams'],
    standard: 'cosmos',
  },
];

module.exports = { affectedChains };
