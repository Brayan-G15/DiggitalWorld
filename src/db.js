import { createPool } from 'mysql2'


import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from './config.js'



export const conection = createPool({
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME,
    port: DB_PORT
})

// conexion.connect( (error)=> {
//     if(error){
//         console.log('El error de conexión es: '+error)
//         return
//     }
//     console.log('¡Conectado a la base de datos MySQL!')
// })

// module.exports = conection
