// including plugins
var gulp    = require('gulp')
, minifyCss = require("gulp-minify-css")
, uglify    = require("gulp-uglify");

gulp.task('minify-css', function () {
	gulp.src('./css/*.css') // path to your file
	.pipe(minifyCss())
	.pipe(gulp.dest('./css'));
});

gulp.task('minify-js', function () {
	gulp.src('./JavaScript/*.js') // path to your files
	.pipe(uglify())
	.pipe(gulp.dest('./js'));
});