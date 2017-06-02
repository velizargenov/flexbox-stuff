var gulp = require('gulp')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')

gulp.task('styles', function () {
  gulp.src('less/*.less')
    .pipe(autoprefixer())
    .pipe(less())
    .pipe(gulp.dest('build'))
})

gulp.task('watch', function () {
  gulp.watch('less/*.less', ['styles'])
})
