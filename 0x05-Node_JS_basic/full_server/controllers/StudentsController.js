import readDatabase from '../utils';

const DB_PATH = process.argv[2];

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(DB_PATH)
      .then((data) => {
        res.statusCode = 200;
        res.write('This is the list of our students\n');
        const fields = Object.keys(data).sort();
        fields.forEach((field, index) => {
          const numStudents = data[field].length;
          const firstnames = data[field].join(', ');
          res.write(
            `Number of students in ${field}: ${numStudents}. List: ${firstnames}`,
          );
          if (index < fields.length - 1) res.write('\n');
        });
      })
      .catch(() => {
        res.statusCode = 500;
        res.write('Cannot load the database');
      })
      .finally(() => {
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.write('Major parameter must be CS or SWE');
      res.end();
    } else {
      readDatabase(DB_PATH)
        .then((data) => {
          const firstnames = data[major].join(', ');
          res.statusCode = 200;
          res.write(`List: ${firstnames}`);
        })
        .catch(() => {
          res.statusCode = 500;
          res.write('Cannot load the database');
        })
        .finally(() => {
          res.end();
        });
    }
  }
}
