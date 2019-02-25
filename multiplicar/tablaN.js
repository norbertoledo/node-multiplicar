const fs = require('fs');


// El limite es opcional, por lo tanto seteo un valor por default
const listarTabla = ( base, limite = 10 )=>{

    return new Promise( (resolve, reject )=>{

        if(!Number(base)){
            reject(`El valor ingresado (${base}) no es una BASE válida`);
            return;
        }else if(!Number(limite)){
            reject(`El valor ingresado (${limite}) no es un LIMITE válida`);
            return;
        }

        let tabla = `TABLA DEL ${base}, de 1 a ${limite}\n`;
        for(let i=1; i<=limite; i++){
            tabla += `${base} * ${i} = ${base*i}\n`;
        }

        resolve(tabla);

    })


}

const crearTabla = (base, limite = 10) =>{
    return new Promise( (resolve, reject) =>{

        if(!Number(base)){
            reject(`El valor ingresado (${base}) no es una BASE válida`);
            return;
        }else if(!Number(limite)){
            reject(`El valor ingresado (${limite}) no es un LIMITE válida`);
            return;
        }

        let pathTablas = "./tablas/"

        let data = `TABLA DEL ${base}, de 1 a ${limite}\n`;

        for (let i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`${pathTablas}tablas-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}`);
        });

    })
}

module.exports = {
    crearTabla: crearTabla,
    listarTabla
}