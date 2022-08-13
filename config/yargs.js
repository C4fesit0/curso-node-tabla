const colors = require('colors');
const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Especifica hasta donde se listaran los resultados'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'la base tiene que ser un numero'.red
                    }
                    return true;
                })
                .argv;



module.exports =argv;