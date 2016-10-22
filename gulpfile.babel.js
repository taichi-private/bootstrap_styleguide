import gulp from 'gulp';
import { pugTasks, sassTasks, fontsTasks } from './gulp_tasks/index';
import styleguideTasks from 'sass-styleguide-with-pug';

gulp.task('styleguideTasks', (callback) => styleguideTasks({
  styleguideDirName: 'styleguide',
  sassDirPath: 'src/sass',
  pugDirPath: 'src/pug/styleguide',
  stylesheetPath: 'dest/css/style.css',
  imageDirPath: 'dest/images',
  fontDirPath: 'dest/fonts',
}, callback));

gulp.task('pugTasks', (callback) => pugTasks({
  srcPath: ['src/pug/**/*.pug', '!src/pug/{layouts,styleguide}/**/*.pug'],
  destPath: 'dest',
  pug: { pretty: true },
}, callback));

gulp.task('sassTasks', (callback) => sassTasks({
  srcPath: ['src/sass/**/*.scss', '!src/sass/{base,components,layouts,vendors}/**/*.scss'],
  destPath: 'dest/css',
}, callback));

gulp.task('fontsTasks', (callback) => fontsTasks({
  srcPath: ['src/fonts/**/*.{woff2,woff,eot,ttf,svg}'],
  destPath: 'dest/fonts',
}, callback));
