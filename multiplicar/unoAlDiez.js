 //FileSystem
 const fs = require('fs');

 const crearTabla = ( )=>{

    return new Promise ( (resolve, reject) =>{
        let base = 0;
        let data = '';
        let pathTablas = "./tablas/"
        
        for(let j=1; j<=10; j++){
            base = j;
            data += `TABLA DEL ${base}\n`;
            for (let i=1; i<=10; i++){
                data += `${base} * ${i} = ${base*i}\n`;
            }
            data+="\n"
            
        }
        
        fs.writeFile(`${pathTablas}tablas-1-10.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-1-10.txt`);

        });
    })
 }

 module.exports = {
     crearTablaUnoADiez: crearTabla
 }
 
