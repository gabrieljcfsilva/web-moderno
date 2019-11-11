const gulp = require('gulp')
const concat = require('gulp-concat')
// const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({ //transpilando codigos ES6+ para versões anteriores            minified : true, //também minifica o arquivo
            comments : false,
            presets: ['env']
        }))
        // .pipe(uglify()) //minifica o arquivo
        .on('error', err => console.log(err)) //para conseguir descobrir algum problema no processo de execução
        .pipe(concat('codigo.min.js')) //concatenar os arquivos e enviar para um novo arquivo minificado
        .pipe(gulp.dest('buil')) //criando pasta para enviar os arquivos
})