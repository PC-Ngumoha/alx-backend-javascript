export default function cleanSet(set, startString) {
  if (!(set instanceof Set)
      || startString === ''
      || typeof startString !== 'string'
  ) return '';

  const output = [...set]
    .filter((elem) => typeof elem === 'string' && elem.startsWith(startString))
    .map((elem) => elem.slice(startString.length));

  return output.join('-');
}
