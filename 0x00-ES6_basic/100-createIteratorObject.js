export default function createIteratorObject(report) {
  let employees = [];

  for (const key of Object.keys(report.allEmployees)) {
    employees = [...employees, ...report.allEmployees[key]];
  }

  let idx = -1;

  return {
    next() {
      idx += 1;
      if (idx < employees.length) {
        return { value: employees[idx], done: false };
      }
      return { value: employees[idx], done: true };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
