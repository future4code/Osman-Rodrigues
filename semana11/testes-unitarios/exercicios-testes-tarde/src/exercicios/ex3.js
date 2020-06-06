export function checaItensDuplicados(array) {
  const map = {};
  array.forEach(n => (map[n] = map[n] === undefined ? false : !map[n]));
  return Object.values(map).some(n => !!n);
}
