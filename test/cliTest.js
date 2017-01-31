const expect = require('chai').expect
const exec = require("child_process").exec

// https://goo.gl/l63xKz
describe('echo hello world', function() {
  var captured_stdout;

  before(function (done) {
      exec('echo hello world', function (error, stdout, stderr) {
          if (error) done(error);
          captured_stdout = stdout;
          done();
      });
  });

  it('should just work', () => {
      expect(captured_stdout).to.match(/hello world/);
  });
});