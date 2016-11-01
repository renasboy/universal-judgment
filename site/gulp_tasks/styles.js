const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const path = require('path');
const wiredep = require('wiredep').stream;
const inject = require('gulp-inject');
const _ = require('lodash');
const conf = require('../conf/gulp.conf');

gulp.task('styles', styles);


function styles() {
    var sassOptions = {
        style: 'expanded'
    };

    // inject files needed for external libraries
    var injectLib = gulp.src([
        path.join(conf.paths.src, '/static/css/pre/**/*.scss')
    ], {read: false});


    var injectLibOptions = {
        transform: function (filePath) {
            filePath = filePath.replace(conf.paths.src, '..');
            return '@import "' + filePath + '";';
        },
        starttag: '// inject:pre',
        endtag: '// endinject:pre',
        addRootSlash: false
    };

    // inject post library styles
    var injectFiles = gulp.src([
        path.join(conf.paths.src, '/static/css/post/**/*.scss'),
        path.join(conf.paths.src, '/app/states/**/*.scss'),
        path.join(conf.paths.src, '/app/components/**/*.scss')
    ], {read: false});

    var injectOptions = {
        transform: function (filePath) {
            filePath = filePath.replace(conf.paths.src, '..');
            return '@import "' + filePath + '";';
        },
        starttag: '// inject:post',
        endtag: '// endinject:post',
        addRootSlash: false
    };


    return gulp.src([
        path.join(conf.paths.src, '/app/index.scss')
    ])
        .pipe(inject(injectLib, injectLibOptions))
        .pipe(inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/')))
        .pipe(browserSync.stream());
};
