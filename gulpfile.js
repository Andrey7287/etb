var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

gulp.task('compass', function() {
	gulp.src('./sass/*.scss')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(compass({
			config_file: './config.rb',
			css: './',
			sass: 'sass'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('concat', function(){
	return gulp.src(['./js/src/jquery.min.js', './js/src/jquery.fancybox.pack.js', './js/src/slick.min.js', './js/src/CustomGoogleMapMarker.js', './js/src/my.js'])
	.pipe(concat('./js/project.js'))
	.pipe(gulp.dest('./'))
});

gulp.watch('./sass/*.scss', ['compass']);
gulp.watch('./js/src/my.js', ['concat']);

gulp.task('default', ['concat', 'compass'], function() {
	browserSync.init({
		server: ".",
		files: ["css.css", "js/src/*.js", "*.html"]
	});
});
