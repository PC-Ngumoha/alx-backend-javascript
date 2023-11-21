const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 1245;
const DB_PATH = process.argv[2];

module.exports = app;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  if (DB_PATH !== undefined) {
    fs.readFile(DB_PATH, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 400;
        res.write('Cannot load the database');
      } else {
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
        res.write(`Number of students: ${totalStudents}\n`);
        fields.forEach((field, index) => {
          const count = studentsByField[field].length;
          const students = studentsByField[field].join(', ');
          res.write(
            `Number of students in ${field}: ${count}. List: ${students}`,
          );
          if (index < fields.length - 1) res.write('\n');
        });
      }
      res.end();
    });
  }
});

app.listen(PORT);
