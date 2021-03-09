//aplicamos destructuring basicamente extraer la función de series de gulp
// const { series, parallel } = require('gulp'); //trae las dependencias de node_modules, require sirve para importar

// function hola( done ) {
//     console.log('Hola mundo en gulp');

//     done();//así marcas cuando termina
// }
//si no marcas cuando termina la terminal te marcará error


//para exportar, para usar nuestro código de forma externa usamos exports
//asi llamas a la función en gulp (sintaxis de nodejs)
//para ejecutarla tenemos que ir a la terminal y poner gulp nombre de la función, en este caso gulp hola1
// exports.hola1 = hola;


// function css (done) {
//     console.log('compilando SASS');

//     done();
// }

// function javascript( done ) {
//     console.log('compilando javascript');

//     done();
// }

// exports.compilarSASS = css;
// exports.javascript = javascript;
// exports.tareas = series(css,javascript); //si en vez de llamarlo tareas lo llamas default, al poner gulp te lo ejecuta
// exports.default = parallel(css,javascript); //con parallel lo ejecuta todo en paralelo

const { series,src,dest, watch } = require('gulp'); //la función src lo que hace es buscar los arhcivos de SASS
                                            //la funcion destnos va a tomar la ruta en la que se va a guardar la versión compilada de esta hoja de estilos o de cualquier otra tarea ( imagenes, scripts)
                                            //watch le decimos que archivos puede que tengan cambios y que si tienen cambios que ejecute una tarea
const sass = require('gulp-dart-sass'); //como este solo tiene una función va sin llaves

//función que compila SASS

function css(  ) {
  return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'expanded' //para que salga menos junto todo
        //también le puedes poner 'compressed' y lo deja todo muy reducido lo que lo hace más ligero
    })) //con esto lees el archivo .scss y lo pasas a SASS pero necesitas un sitio en el que guardarlo
    .pipe( dest('./build/css')) //marcamos donde queremos guardarlo
}


function minificarcss() { //así podrías tener una función que te minificara el código de forma automática
    return src('src/scss/app.scss')
    .pipe( sass({
        outputStyle: 'compressed' 
        
    })) 
    .pipe( dest('./build/css')) 

}

function watchArchivos() {
    watch('src/scss/app.scss', css); //le pasamos la ruta del archivo y la función que queremos que ejecute

}

exports.css = css;
exports.minificarcss = minificarcss;    
exports.watchArchivos = watchArchivos;