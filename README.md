# error
公用的错误页面


----------
多个应用进入不同的文件夹，一套sass通过打包生成两套html和css.

	gulp


----------

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


#demo

[http://tianxiangbing.github.io/error/](http://tianxiangbing.github.io/error/)
