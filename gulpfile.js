//aplicamos destructuring basicamente extraer la función de series de gulp
const { series, parallel } = require('gulp'); //trae las dependencias de node_modules, require sirve para importar

// function hola( done ) {
//     console.log('Hola mundo en gulp');

//     done();//así marcas cuando termina
// }
//si no marcas cuando termina la terminal te marcará error


//para exportar, para usar nuestro código de forma externa usamos exports
//asi llamas a la función en gulp (sintaxis de nodejs)
//para ejecutarla tenemos que ir a la terminal y poner gulp nombre de la función, en este caso gulp hola1
// exports.hola1 = hola;


function css (done) {
    console.log('compilando SASS');

    done();
}

function javascript( done ) {
    console.log('compilando javascript');

    done();
}

exports.compilarSASS = css;
exports.javascript = javascript;
exports.tareas = series(css,javascript); //si en vez de llamarlo tareas lo llamas default, al poner gulp te lo ejecuta
exports.default = parallel(css,javascript); //con parallel lo ejecuta todo en paralelo