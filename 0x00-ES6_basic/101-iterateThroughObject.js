export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  const reportIterator = reportWithIterator[Symbol.iterator]();

  while (true) {
    const employeeName = reportIterator.next();
    if (employeeName.value !== undefined) {
      result.push(employeeName.value);
    }
    if (employeeName.done) break;
  }

  return result.join(' | ');
}
