var    gulp = require('gulp'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
minifycss =require('gulp-minify-css'),
concatify = require('gulp-concat'),
less = require('gulp-less'),
clean = require('gulp-clean');


gulp.task('minify-js', function () {
  return gulp.src('src/pokemon.js')
  .pipe(concat('pokemon.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});

gulp.task('minify-css', function () {
  return gulp.src('src/pokemon.css')
  .pipe(concat('pokemon.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css'))
});

gulp.task('concatify', function() {
  return gulp.src('src/pokemon.js')
  .pipe(uglify())
  .pipe(concatify('all.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('less', function() {
  return gulp.src('src/pokemon.less')
  .pipe(less())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function(){
  return gulp.src('css/')
  .pipe(clean({force: true}))
  .pipe(gulp.dest('dist'));
})