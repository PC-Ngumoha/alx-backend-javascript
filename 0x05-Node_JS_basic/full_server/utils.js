import fs from 'node:fs';

const readDatabase = (file_path) => new Promise((resolve, reject) => {
  fs.readFile(file_path, 'utf-8', (err, data) => {
    if (err) {
      return reject(new Error());
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
    return resolve(studentsByField);
  });
});

export default readDatabase;
