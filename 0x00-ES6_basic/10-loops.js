export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const elem of array) {
    // const idx = array.indexOf(elem);
    newArray.push(appendString + elem);
  }

  return newArray;
}
