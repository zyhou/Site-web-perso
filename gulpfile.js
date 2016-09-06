
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var source = './css';
var destination = './dist';

gulp.task('css', function () {
    return gulp.src(source + '/*.css')
        .pipe(plugins.csscomb())
        .pipe(plugins.cssbeautify({ indent: '  ' }))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(destination));
});

gulp.task('minify', function () {
    return gulp.src(destination + '/*.css')
        .pipe(plugins.csso())
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest(destination));
});

gulp.task('build', ['css']);
gulp.task('prod', ['build',  'minify']);
gulp.task('default', ['build']);

gulp.task('watch', function () {
  gulp.watch(source + '*.css', ['build']);
});