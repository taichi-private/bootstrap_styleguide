import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import minifyCss from 'gulp-minify-css';
import autoprefixer from 'gulp-autoprefixer';

export default (options, callback) => {
  const defaults = {
    srcPath: ['src/sass/**/*.scss'],
    destPath: 'dest/stylesheets',
    plumber: {},
    sass: {},
    autoprefixer: {
      browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
      cascade: false
    },
    minifyCss: { advanced: false },
    sourcemaps: {
      init: { loadMaps: true },
      write: './',
    },
  };
  const config = Object.assign(defaults, options);
  gulp.src(config.srcPath)
    .pipe(plumber(config.plumber))
    .pipe(sourcemaps.init(config.sourcemaps.init))
    .pipe(sass(config.sass))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(minifyCss(config.minifyCss))
    .pipe(sourcemaps.write(config.sourcemaps.write))
    .pipe(gulp.dest(config.destPath))
    .on('end', () => callback());
};
