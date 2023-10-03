export default function cleanSet(set, startString) {
  if (!(set instanceof Set)
      || startString === ''
      || typeof startString !== 'string'
  ) return '';

  const output = [...set]
    .filter((elem) => elem.startsWith(startString))
    .map((elem) => elem.replace(startString, ''));

  return output.join('-');
}
