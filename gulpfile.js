const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat')
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

gulp.task('default', ['sass', 'html', 'watch', 'js']);
gulp.task('dev', ['sass', 'html', 'js']);

gulp.task("html", (done)=>{
  gulp.src('./client/html/**/*.html')
  .pipe(gulp.dest('./public/'))
  .on("end", done)
})

gulp.task('sass', function(done){
  gulp.src('./client/sass/style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest('./public/styles'))
  .on('end', done)
});

gulp.task('watch', function(){
  gulp.watch('./client/sass/**/*.scss', ['sass']);
  gulp.watch('./client/html/**/*.html', ['html']);
  gulp.watch('./client/js/**/*.js', ['js']);
})

gulp.task('js', ['clean:js'], function() {
  return gulp.src('client/js/**/*.js')
  .pipe(plumber())
  .pipe(ngAnnotate())
  .pipe(babel({presets:['es2015']}))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('public/js'));
});


gulp.task('clean:js', function() {
  return gulp.src('public/js', {read:false})
  .pipe(plumber())

})
