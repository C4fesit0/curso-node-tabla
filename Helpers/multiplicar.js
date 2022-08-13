const fs =require('fs');
const colors =require('colors')
const crearArchivo = async (base=5,listar=false,hasta=10) =>{
  
    try{

        let salida='';
        for(let i=0;i<hasta;i++){
            salida+=`${base} x ${i+1} = ${base*(i+1)}\n`;
        }
        if(listar){
        console.log("===========================".green);
        let mensaje=('       Tabla del:'+base);
        console.log(colors.rainbow(mensaje));
        console.log("===========================".green);
        
            console.log(salida.america);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt`;
    }catch(err){
        throw err;
    }
    
}

module.exports = {
    crearArchivo
}