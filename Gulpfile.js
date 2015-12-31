var gulp = require('gulp');
var elm  = require('gulp-elm');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch')

gulp.task('watch', function() {
  gulp.watch('src/*', ['default']);
});

gulp.task('default', function(){
  elm.init();
  return gulp.src('src/*.elm')
    .pipe(plumber())
    .pipe(elm())
    //.pipe(uglify())
    .on('error', swallowError)
    .pipe(gulp.dest('dist/'));
});

swallowError = function(error){
  console.log(error.toString());
  this.emit('end');
}
