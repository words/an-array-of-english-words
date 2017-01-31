const expect = require('chai').expect
const exec = require('child_process').exec
const cli = './cli.js'

// https://goo.gl/l63xKz
describe('help', function () {
  var capturedStdout
  var capturedStderr
  // http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-3.html
  // var cmd = cli + " --help 1>&2"
  var cmd = cli + ' --help'

  before(function (done) {
    exec(cmd, function (error, stdout, stderr) {
      if (error) done(error)
      capturedStdout = stdout
      capturedStderr = stderr
      done()
    })
  })

  it('should succeed', () => {
    expect(capturedStderr).be.empty
  })

  it('should have some usage instructions', () => {
    expect(capturedStdout).to.match(/Usage: words \[options] \[pattern]/)
  })

  it('should show a sematic version number', () => {
    // http://rubular.com/r/lTC1wu95jq
    expect(capturedStdout).to.match(/v\d+\.\d+\.\d+/)
  })

  it('should have some examples', () => {
    expect(capturedStdout).to.match(/Examples:/)
  })
})

