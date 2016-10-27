// const gulp = require('gulp');
// const importer = require('gulp-fontello-import');
// const rename = require("gulp-rename");
// const shell = require('gulp-shell');
// const del = require('del');
// const runSequence = require('run-sequence');
//
//
// // Create an config file to sent to Fontello
// gulp.task('import-svg', function (cb) {
//     importer.importSvg({
//         config: 'fontello/config.json',
//         svgsrc: 'fontello/svg'
//     }, cb);
// });
//
//
// // Send config file to Fontello and download the CSS result embedded
// gulp.task('download-icons', ['import-svg'], function (cb) {
//     importer.getFont({
//         host: 'http://fontello.com',
//         config: '../fontello/config.json',
//         css: 'css'
//     }, cb);
// });
//
//
// // Build the icons
// gulp.task('build-icons', function () {
//     runSequence(
//         ['download-icons'], function () {
//             runSequence(
//                 'move-css',
//                 'clear-css',
//                 'remove-dirt',
//                 'reset-config'
//             );
//         });
// });
//
// // Copy the embedded CSS to be used
// gulp.task('move-css', function () {
//     gulp.src('icon-example/**/*embedded.css', {base: './'})
//         .pipe(rename("_icon-fonts-dirt.scss"))
//         .pipe(gulp.dest('app/css/'));
// });
//
//
// // Remove first unused line from the css
// gulp.task('clear-css', shell.task([
//     'node fontello/extrac-css'
// ]));
//
// // Delete the temporarily files
// gulp.task('remove-dirt', function () {
//     del([
//         'app/css/_icon-fonts-dirt.scss',
//         'icon-example']
//     ).then(paths = > {
//         console.log('clean');
// })
//     ;
// });
//
//
// gulp.task('reset-config', function () {
//     del(['fontello/config.json']).then(paths = > {
//         gulp.src('fontello/config.bkp.json')
//         .pipe(rename("config.json"))
//         .pipe(gulp.dest('fontello/'));
// })
//     ;
// });
