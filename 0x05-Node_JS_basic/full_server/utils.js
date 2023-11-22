import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return reject();
    }
    const lines = data.split('\n');
    lines.shift();
    const fields = [];
    const studentsByField = {};
    lines.forEach((line) => {
      if (line !== '') {
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
