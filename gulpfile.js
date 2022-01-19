"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var imagemin = require("gulp-imagemin");

//'buildStyles' function to convert scss to css, stores css to src directory
function buildStyles() {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./src/css"));
}

//'goPublic' function copies the source files to the distribution
//prettier-ignore
function goPublic(cb) {
	(function () {
		return [
			gulp.src("./src/index.html").pipe(gulp.dest("./dist")), //copies the html to dist
			gulp.src("./src/js/**/*.js").pipe(gulp.dest("./dist/js/")), // copies js to dist
			gulp.src("./src/img/**/*.{jpg,png,svg,gif,ico,webp}").pipe(imagemin()).pipe(gulp.dest("./dist/images")), //copies imgs to dist
			gulp.src("./src/css/*").pipe(gulp.dest("./dist/css")), // copy generated css to dist
			gulp.src("./src/fonts/*").pipe(gulp.dest("./dist/fonts")), // copy generated css to dist
		];
	})();
	cb();
}

exports.goPublic = goPublic;
exports.buildStyles = buildStyles;

//'watch' function to watch for changes in the scss stylesheets and the html, calls the buildStyles that converts scss to css and goPublic that copies the src files to dist directory
exports.watch = function () {
	gulp.watch(
		["./src/scss/**/*.scss", "./src/*.html", "./src/js/**/*.js"],
		gulp.series(["buildStyles", "goPublic"])
	);
};
