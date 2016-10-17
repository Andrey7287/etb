var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var compass = require('gulp-compass');


gulp.task('compass', function() {
	gulp.src('./sass/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: './',
			sass: './'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('concat', function(){
	return gulp.src('./js/src/*.js')
	.pipe(concat('./js/project.js'))
	.pipe(gulp.dest('./'))
});

gulp.task('default', ['concat', 'compass'], function() {
	browserSync.init({
		server: ".",
		files: ["css.css", "js/*.js", "index.html"]
	});
});
