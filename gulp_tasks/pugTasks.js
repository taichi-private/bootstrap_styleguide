import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';

export default (options, callback) => {
  const defaults = {
    srcPath: ['src/pug/**/*.pug'],
    destPath: 'dest',
    plumber: {},
    pug: {},
  };
  const config = Object.assign(defaults, options);
  gulp.src(config.srcPath)
    .pipe(plumber(config.plumber))
    .pipe(pug(config.pug))
    .pipe(gulp.dest(config.destPath))
    .on('end', () => callback());
};
