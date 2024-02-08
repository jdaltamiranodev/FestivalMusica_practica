const { src, dest, watch} = require("gulp")
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css( done ){
    // Identificar el archivo de SASS


    // Compilarlo

    // Almacenarla en el disco duro

    src('src/scss/**/*.scss') // Identificar el archivo SASS
        .pipe( plumber())
        .pipe( sass() ) // Compilarlo
        .pipe( dest('build/css') ) // Almacenarla en el disco duro

    done(); // callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch("src/scss/**/*.scss", css)

    done();
}

exports.css = css ;
// para ejecutar por npx desde los binarios seria: npx gulp tarea
// para llamar de los scripts, se agrega a scripts y se pone npm run nombreTarea
exports.dev = dev;