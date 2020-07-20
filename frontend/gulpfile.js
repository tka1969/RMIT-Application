var gulp = require('gulp');
var del = require('del');

gulp.task('default', gulp.series(clean, copyIndex, copyAppJs));
gulp.task('index', gulp.series(clean, copyIndex));
gulp.task('watch', gulp.series(watchAppJs));

function clean(done) {
    del(['dist/**/*.*']);
    done();
}

function copyIndex(done) {
    return gulp.src('./src/index.html').pipe(gulp.dest('./dist', {overwrite: true}));
}

function copyAppJs(done) {
    return gulp.src('./src/**/*.js').pipe(gulp.dest('./dist', {overwrite: true}));
}

function watchAppJs(done) {
    return gulp.watch('./src/**/*.*', gulp.series(clean, copyIndex, copyAppJs));
}
