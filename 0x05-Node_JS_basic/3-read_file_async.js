const fs = require('fs');

/**
 * countStudents()
 *
 * @abstract An asynchronous version of what was created in task #2.
 * @author Prince C. Ngumoha
 * @param {*} path
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }
    const lines = data.split('\n');
    lines.shift();
    let totalStudents = 0;
    const fields = [];
    const studentsByField = {};
    lines.forEach((line) => {
      if (line !== '') {
        totalStudents += 1;
        const student = line.split(',');
        const [firstName, , , field] = student;
        if (!fields.includes(field)) {
          fields.push(field);
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    });
    console.log(`Number of students: ${totalStudents}`);
    fields.forEach((field) => {
      const count = studentsByField[field].length;
      const students = studentsByField[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${students}`);
    });
    return resolve();
  });
});

module.exports = countStudents;
