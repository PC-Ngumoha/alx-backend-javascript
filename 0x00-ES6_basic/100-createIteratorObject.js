export default function createIteratorObject(report) {
  let employees = [];

  for (const key of Object.keys(report.allEmployees)) {
    employees = [...employees, ...report.allEmployees[key]];
  }

  let done = false;
  let idx = 0;

  return {
    next() {
      idx += 1;
      if (idx > employees.length) { done = true; }
      return { value: employees[idx - 1], done };
    },

    [Symbol.iterator]() {
      return this;
    },
  };
}
