export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }

  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }
}
