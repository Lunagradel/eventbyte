var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');


gulp.task('default', function() {
    // Stuff here
});


gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['sass'],function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});


gulp.task('useref', function(){
    return gulp.src('app/index.php')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'))
});