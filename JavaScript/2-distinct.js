'use strict';

function distinct(dataset) {
  const keys = new Set();
  return dataset.filter(record => {
    const cols = Object.keys(record).sort();
    const key = cols.map(field => record[field]).join('\x00');
    const has = keys.has(key);
    keys.add(key);
    return !has;
  });
}

let flights = [
  { from: 'Kiev', to: 'Rome' },
  { from: 'Kiev', to: 'Warsaw' },
  { from: 'Dublin', to: 'Riga' },
  { from: 'Riga', to: 'Dublin' },
  { from: 'Kiev', to: 'Rome' },
  { from: 'Cairo', to: 'Paris' }
];

console.dir({ flights });

flights = distinct(flights);

console.dir({ flights });
