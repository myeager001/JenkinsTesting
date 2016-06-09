var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', ['build']);

gulp.task('clean', function(){
  return del(['build']);
});

gulp.task('build', ['clean'], function(){
  return gulp.src('./src/js/*')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});
