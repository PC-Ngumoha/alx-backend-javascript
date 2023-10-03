export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) return false;
  for (const elem of array) {
    if (!set.has(elem)) return false;
  }
  return true;
}
