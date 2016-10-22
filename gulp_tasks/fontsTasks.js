import gulp from 'gulp';
import changed from 'gulp-changed';

export default (options, callback) => {
  const defaults = {
    srcPath: ['src/fonts/**/*.{woff2,woff,eot,ttf,svg}'],
    destPath: 'dest/fonts',
  };
  const config = Object.assign(defaults, options);
  gulp.src(config.srcPath)
    .pipe(changed(config.destPath))
    .pipe(gulp.dest(config.destPath))
    .on('end', () => callback());
};
