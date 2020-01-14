var gulp = require('gulp');
var  watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
   browserSync.init({
     server: {
       baseDir: "./"
      }
  });
});


gulp.task('watch', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    watch(['css/**/*.html','./js/**/*.js'], function () {
      browserSync.reload();
    });
});
gulp.task('default',  gulp.parallel('browser-sync','watch'));
