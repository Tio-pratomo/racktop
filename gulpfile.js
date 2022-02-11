const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('src/styling/scss/**/*.scss').pipe(sass()).pipe(dest('src/styling/css/'));
}

function watchTask() {
    watch(['src/styling/scss/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
