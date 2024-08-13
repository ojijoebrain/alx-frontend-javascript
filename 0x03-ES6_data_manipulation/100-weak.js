export const endpointMap = new WeakMap();

export function trackAPIUsage(endpoint) {
  let usageCount = endpointMap.get(endpoint) || 0;
  usageCount += 1;

  if (usageCount >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    endpointMap.set(endpoint, usageCount);
  }
}
