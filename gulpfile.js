
var gulp = require('gulp');
var cp = require('child_process')

gulp.task('build', function () {
  cp.spawn('babel', ['js', '--out-dir=build'], {
    stdio: 'inherit'
  })
})

gulp.task('watch', function () {
  gulp.watch('js/**/*', ['build'])
})
