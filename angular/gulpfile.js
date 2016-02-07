var
    gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    clean           = require('gulp-clean');

gulp.task('default', ['serve'], function() {});

gulp.task('build', function () {
    runSequence('bower', 'sass', 'copy');
    });

gulp.task('serve', ['build'], function() {
    runSequence('browser-sync');

    gulp.watch(['app/**/*'], function (file) {
        runSequence('sass', 'copy');
        browserSync.reload();
    });

});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist'
        },
        port: 9000,
        notify: false,
        tunnel: false,
        browser: "none",
    });
});

gulp.task('clean', function () {
    return gulp.src('dist')
    .pipe(clean());
});


gulp.task('bower', function(){
    return gulp.src('./bower_components/**/*')
    .pipe(gulp.dest('./dist/bower_components'));
});


gulp.task('sass', function () {
    gulp.src('./app/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('copy', function() {
    runSequence('copy-js', 'copy-img', 'copy-data', 'copy-html', 'copy-fonts');
});
gulp.task('copy-js', function(){
    return gulp.src('./app/js/**')
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('copy-img', function(){
    return gulp.src('./app/img/**')
    .pipe(gulp.dest('./dist/img'));
});
gulp.task('copy-data', function(){
    return gulp.src('./app/data/**/*')
    .pipe(gulp.dest('./dist/data'));
});
gulp.task('copy-html', function(){
    return gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'));
});
gulp.task('copy-fonts', function(){
    return gulp.src('./app/fonts/**')
    .pipe(gulp.dest('./dist/fonts'));
});
