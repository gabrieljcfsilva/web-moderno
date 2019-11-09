const gulp = require('gulp')

gulp.task('default', () => { //porta de entrada do script, necessário
    gulp.start('copiar', 'fim')
})

//para que a task copiar seja executada, sera necessário executar as tasks que estão dentro do array
gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src(['pastaA/**/*.txt'])
        // .pipe(transformacao1())
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim2!!!')
})