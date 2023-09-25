export default function appendToEachArrayValue(array, appendString) {
  for (const elem of array) {
    const idx = array.indexOf(elem);
    array[idx] = appendString + elem;
  }

  return array;
}
