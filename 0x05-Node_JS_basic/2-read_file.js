const fs = require('fs');

/**
 * countStudents() function
 * @abstract counts the students in a certain field from a CSV file
 * @author Prince C. Ngumoha
 * @param {*} path
 */
const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
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
  process.stdout.write(`Number of students: ${totalStudents}\n`);
  fields.forEach((field) => {
    const count = studentsByField[field].length;
    const students = studentsByField[field].join(', ');
    process.stdout.write(`Number of students in ${field}: ${count}. List: ${students}\n`);
  });
};

module.exports = countStudents;
