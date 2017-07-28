var gulp = require('gulp')
var EmailBuilder = require('gulp-email-builder')

var builder = EmailBuilder({
  encodeSpecialChars: true
})

gulp.task('emailBuilder', function() {
  return gulp.src(['./html/*.html'])
    .pipe(builder.build())
    .pipe(gulp.dest('./dist/'))
})

gulp.task('default', ['emailBuilder']);