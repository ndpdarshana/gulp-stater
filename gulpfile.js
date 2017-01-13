//Required

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browsersync = require('browser-sync'),
    reload = browsersync.reload,
    compass = require('gulp-compass'),
    del = require('del'),
    print = require('gulp-print'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename');

//Script tasks

gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream:true}));
});

// Compass / Sass Tasks

gulp.task('compass', function(){
  gulp.src('app/scss/style.scss')
  .pipe(plumber())
  .pipe(compass({
    config_file:'config.rb',
    css:'app/css',
    sass:'app/scss',
    require:['susy']
  }))
  .pipe(gulp.dest('app/css/'))
  .pipe(reload({stream:true}));
});

// HTML tasks

gulp.task('html', function(){
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));
});

//Build taks lists

// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function () {
	del([
		'build/**'
	]);
});

// task to create build directory of all files
gulp.task('build:copy', ['build:cleanfolder'], function(){
    return gulp.src('app/**/*/')
    .pipe(gulp.dest('build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', ['build:copy'], function () {
	del([
    'build/scss/',
    'build/js/!(*.min.js)'
  ]);
});

gulp.task('build', ['build:copy', 'build:remove']);

// Browser-sync task

gulp.task('browser-sync', function(){
  browsersync({
    server:{
      baseDir:"./app/"
    }
  });
});

//Browser-sync that uses build
gulp.task('build:serve', function(){
  browsersync({
    server:{
      baseDir:"./build/"
    }
  });
});

// Watch task

gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch('app/**/*.html', ['html'])
});

// Default task

gulp.task('default', ['scripts', 'html', 'compass', 'browser-sync', 'watch']);
