'use strict';

const gulp            = require('gulp');
const path            = require('path');
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');

const root      = path.resolve(__dirname);
const src       = path.resolve(root, 'frontend');
const dest      = path.resolve(root, 'static');

const config = {};

config.styles = {
    src:        path.join(src, 'scss', '**', '*.scss'),
    dest:       path.join(dest, 'css')
};

//sass compile
gulp.task('sass', function () {
    return gulp.src(config.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.styles.dest));
});

//sass watch
gulp.task('sass:watch', function () {
    gulp.watch(config.styles.src, ['sass']);
});