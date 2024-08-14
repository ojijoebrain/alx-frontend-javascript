export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let usageCount = weakMap.get(endpoint) || 0;

  usageCount += 1;

  if (usageCount >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, usageCount);
  }
}
