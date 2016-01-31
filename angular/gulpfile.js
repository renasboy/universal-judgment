var
    gulp            = require('gulp'),
    runSequence     = require('run-sequence'),
    gls             = require('gulp-live-server'),
    uglify          = require('gulp-uglify'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    clean           = require('gulp-clean');

gulp.task('default', ['serve'], function() {});

gulp.task('build', function () {
    runSequence('bower', 'sass', 'copy');
    });

// gulp.task('serve', ['build'], function(cb) {
//     runSequence('browser-sync', 'watch', cb);
// });

gulp.task('clean', function () {
    return gulp.src('dist')
    .pipe(clean());
    });



gulp.task('serve', ['bower', 'sass', 'copy'], function() {

    var server = gls.static('/dist', 8001);
    server.start();

    gulp.watch(['app/**/*.scss', 'app/**/*.html'], function (file) {
        runSequence('sass');
        server.notify.apply(server, [file]);
    });
});

gulp.task('stop', function() {
    var server = gls.static();
    server.stop();
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
    .pipe(sourcemaps.write())
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
    return gulp.src('./app/data/**')
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
