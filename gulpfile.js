// include gulp
var gulp = require('gulp');

// include all plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var imgopt = require('gulp-image-optimization');
var minhtml = require('gulp-minify-html');
var mininline = require('gulp-minify-inline');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('images', function(cb) {
    gulp.src(['**/*.png','**/*.jpg','**/*.gif','**/*.jpeg', '!node_modules/**']).pipe(imgopt({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('./build/')).on('end', cb).on('error', cb);
});

gulp.task('css', function() {
  return gulp.src('**/*.css')
    .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('scripts-views', function() {
    return gulp.src('./views/js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/views/js/'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/views/js/'));
});

gulp.task('min-html', function() {
    var opts = {comments:false,spare:true};

  gulp.src('**/*.html')
    .pipe(minhtml(opts))
    .pipe(gulp.dest('./build/'))
});

// Watch Files For Changes - watch doesn't work because it loops
// maybe better organization would have build dir below the source?
gulp.task('watch', function() {
    gulp.watch('./views/js/*.js', ['lint', 'scripts-views']);
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('**/*.html', ['min-html']);
    gulp.watch('**/*.css', 'css');
});
 
 

gulp.task('default', ['lint', 'css', 'images','scripts','min-html',
                     'scripts-views']);

