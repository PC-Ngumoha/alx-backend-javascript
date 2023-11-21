const { exec } = require('child_process');

test('1-stdin.js returns the correct output for the right input', (done) => {
  const query = 'Welcome to Holberton School, what is your name?';
  const output = 'Your name is: Chukwuemeka';
  const closing = 'This important software is now closing';
  const expectedOutput = `${query}\n${output}\n${closing}\n`;
  exec("echo 'Chukwuemeka' | node 1-stdin.js", (error, stdout, stderr) => {
    expect(error).toBeNull();
    expect(stdout).toBe(expectedOutput);
    expect(stderr).not.toBeNull();
    done();
  });
});