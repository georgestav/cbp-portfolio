"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));

function buildStyles() {
	return gulp
		.src("./src/scss/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./src/css"));
}

function goPublic() {
	return [
		gulp.src("./src/index.html").pipe(gulp.dest("./dist")),
		gulp.src("./src/images/*").pipe(gulp.dest("./dist/images")),
		gulp.src("./src/css/*").pipe(gulp.dest("./dist/css")),
	];
}

exports.goPublic = goPublic;
exports.buildStyles = buildStyles;
exports.watch = function () {
	gulp.watch("./src/scss/**/*.scss", gulp.series(["buildStyles"]));
};
