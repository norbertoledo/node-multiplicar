// Requireds
/**
 * Tipos de requires:
 * 
 * Librerias propias e incluidas en node:
 * const fs = require('fs');
 * 
 * Librerias que no son nativas en node y hechas por terceros
 * const fs = require('express'); 
 * 
 * Archivos que nosotros creamos en el proyecto y se identifican por el path
 * const fs = require('./fs');
 */

 //FileSystem
//const fs = require('fs');
// Utilizamos la destructuracion para importar solo una funcion del paquete
// Creo un alias en la destructuracion 
const {crearTablaUnoADiez: unoAlDiez} = require('./multiplicar/unoAlDiez');
const {crearTabla, listarTabla} = require('./multiplicar/tablaN')

//fs.writeFile(file, data[,options], callback)
// file: path y nombre del archivo
// data: array de lo que queremos grabar y opciones como 'utf-8'
// callback: Respuesta si lo hizo o no

const {argv} = require('./config/yargs');
const colors = require('colors');

let comando = argv._[0];
console.log(argv);

switch(comando){
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.rainbow))
            .catch(err => console.log(err))
        break;

    case 'crear':
        console.log('crear');
        
        crearTabla(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${colors.green( archivo )}`))
            .catch( err => console.log(err))
        
        break;

    default:
        console.log('comando no reconocido');
}



// Process: Proceso de node que se lanza junto con la app
// y genera una variable global que puede ser accedida 
// brinda mucha información
//console.log (process);
//console.log(process.argv);
//let argv2 = process.argv;
//let param = argv[2]; // devuelve un string
//let base = param.split('=')[1]; // devuelve un array con los dos parametros cortados, pero solo necesito el segundo indice
//console.log('base:',argv.base);
//console.log('limite:',argv.limite);
//console.log(argv2);

/*
console.log(base);

crearTabla(base)
    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch( err => console.log(err))



unoAlDiez()
    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch( err => console.log(err))
*/