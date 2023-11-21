const fs = require('fs');
const countStudents = require('../3-read_file_async');

test('read_file_async calls up the correct functions', (done) => {
  const readFileSpy = jest.spyOn(fs, 'readFile');

  countStudents('database.csv').then(() => {
    expect(readFileSpy).toHaveBeenCalled();
    done();
  });
});
