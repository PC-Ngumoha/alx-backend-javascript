const fs = require('fs');
const countStudents = require('../2-read_file');

test('read_file calls the correct functions', () => {
  const readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
  const existsSyncSpy = jest.spyOn(fs, 'existsSync');

  countStudents('database.csv');

  expect(existsSyncSpy).toHaveBeenCalled();
  expect(readFileSyncSpy).toHaveBeenCalled();

  existsSyncSpy.mockRestore();
  readFileSyncSpy.mockRestore();
});
