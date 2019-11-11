const gulp = require('gulp')
const concat = require('gulp-concat')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(concat('projeto.min.js'))
        .pipe(gulp.dest('build'))
})
