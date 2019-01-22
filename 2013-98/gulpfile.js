let gulp = require('gulp');

// Requires the gulp-sass plugin
let eslint = require('gulp-eslint');
let compass = require('gulp-compass');

const SRC = {
    JS: __dirname + '/js/*.js',
    SASS: __dirname + '/sass/*.scss'
};

gulp.task('watch', () => {
    gulp.watch(SRC.JS, gulp.series('eslint'));
    gulp.watch(SRC.SASS, gulp.series('sass'));
});


gulp.task('sass', () => {
    return gulp.src(SRC.SASS)
                .pipe(compass({
                    project: __dirname,
                    css: 'css',
                    sass: 'sass'
                }));
});

gulp.task('eslint', () => {
    return gulp.src(SRC.JS)
                .pipe(eslint({ globals: ['jQuery', '$'] }))
                .pipe(eslint.format())
                .pipe(eslint.failAfterError());
});