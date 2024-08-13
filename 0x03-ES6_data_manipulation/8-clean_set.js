export default function extractAndCleanSet(set, startString) {
  const result = [];

  if (
    !(set instanceof Object)
    || typeof startString !== 'string'
    || startString === ''
  ) {
    return '';
  }

  for (const entry of set) {
    if (entry && entry.startsWith(startString)) {
      result.push(entry.substring(startString.length));
    }
  }

  return result.join('-');
}
