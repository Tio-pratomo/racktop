const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function buildStyles() {
    return src('src/styling/scss/**/*.scss').pipe(sass()).pipe(autoprefixer()).pipe(dest('src/styling/css/'));
}

function watchTask() {
    watch(['src/styling/scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
