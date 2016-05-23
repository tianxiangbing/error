'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var rename = require("gulp-rename");

gulp.task('sass', function () {
  gulp.src('./sass/ub.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('css.css'))
    .pipe(gulp.dest('./ub/css'));
 gulp.src('./sass/masheng.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('css.css'))
    .pipe(gulp.dest('./masheng/css'));
});
/*gulp.task('rename',function(){
    gulp.src('./ub/css/*.css')
    .pipe(rename('./ub/css/css.css'))
    .pipe(gulp.dest('./'));
    gulp.src('./masheng/css/*.css')
    .pipe(rename('./masheng/css/css.css'))
    .pipe(gulp.dest('./'));
});*/

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch(['./temp/**/*.html','./temp/**/*.htm'], ['fileinclude']);
});

gulp.task('fileinclude', function() {
  gulp.src(['./temp/**/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('../error'))
    //.pipe(gulp.dest('./masheng'));
});
gulp.task('default',['sass','fileinclude'])