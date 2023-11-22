import path from 'node:path';
import readDatabase from '../utils.js';

const DB_PATH = path.normalize(process.argv[2]);

export default class StudentsController {
  
  static getAllStudents(request, response) {
    readDatabase(DB_PATH)
    .then((data) => {
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      const fields = Object.keys(data).sort();
      fields.forEach((field, index) => {
        const numStudents = data[field].length;
        const firstnames = data[field].join(', ');
        response.write(
          `Number of students in ${field}: ${numStudents}. List: ${firstnames}`,
        );
        if (index < fields.length - 1) response.write('\n');
      });
    })
    .catch((err) => {
      response.statusCode = 500;
      response.write('Cannot load the database');
    })
    .finally(() => {
      response.end();
    })
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.write('Major parameter must be CS or SWE');
      return response.end();
    }

    readDatabase(DB_PATH)
    .then((data) => {
      const firstnames = data[major].join(', ');
      response.statusCode = 200;
      response.write(`List: ${firstnames}`)
    })
    .catch((err) => {
      response.statusCode = 500;
      response.write('Cannot load the database');
    })
    .finally(() => {
      response.end();
    });
  }
}
