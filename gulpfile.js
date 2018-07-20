require('./gulp/tasks/styles');//no need to include .js
require('./gulp/tasks/watch');

//var gulp = require('gulp'),
//watch = require('gulp-watch'),
// postcss = require('gulp-postcss'),
// autoprefixer = require('autoprefixer'),
// cssvars = require('postcss-simple-vars'),
// nested = require('postcss-nested'),
// cssImport = require('postcss-import');
// browserSync = require('browser-sync').create();




// gulp.task('watch', function(){

//     browserSync.init({
//         notify:false,
//         server: {
//             baseDir: "app" //the dir of the page
//         }
//     });

//     watch('./app/index.html', function(){
//         browserSync.reload();
//     });

//     watch('./app/assets/styles/**/*.css', function(){
//         gulp.start('cssInject');
//     });
// });

// gulp.task('cssInject', ['styles'], function(){
//     return gulp.src('./app/temp/styles/styles.css')
//       .pipe(browserSync.stream());
// });