var gulp = require('gulp')
var less = require('gulp-less')
var autoprefixer = require('gulp-autoprefixer')
var path = require('path')

gulp.task('styles', function () {
  gulp.src('styles/less/*.less')
    .pipe(autoprefixer())
    .pipe(less())
    .pipe(gulp.dest('styles/build'))
})

gulp.task('watch', function () {
  gulp.watch('styles/less/*.less', ['styles'])
})
