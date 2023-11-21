const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_PATH = process.argv[2];

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    if (DB_PATH !== undefined) {
      fs.readFile(DB_PATH, 'utf-8', (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
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
        response.write(`Number of students: ${totalStudents}\n`);
        fields.forEach((field, index) => {
          const count = studentsByField[field].length;
          const students = studentsByField[field].join(', ');
          response.write(
            `Number of students in ${field}: ${count}. List: ${students}`,
          );
          if (index < fields.length - 1) response.write('\n');
        });
        response.end();
      });
    }
  }
});

module.exports = app;

app.listen(PORT);
