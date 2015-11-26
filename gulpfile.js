(function() { 'use strict';
///////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var util = require('gulp-util');

gulp.task('default', ['watch'])
gulp.task('watch', function() {
  var filesToWatch = [
    'src/styles/*.scss',
    'src/styles/*.less',
    'src/styles/*.css',
    'src/scripts/*.js',
    'src/*.html'
  ];

  function doSomething() {
    util.log("I do something ...");
  }

  gulp.watch(filesToWatch, doSomething) ;
});



///////////////////////////////////////////////////////////////////////////////
})();