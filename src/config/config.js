//config
export const AdminEmail = 'diegoby1994@gmail.com'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const mongoConnect = mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Conectado a la base de datos');
    })
    .catch((err) => {
        console.log('No se pudo conectar a la base de datos', err);
    });


    //copié esto de mi desafío de clase y ya no acepta callbacks
//  const mongoConnect =  mongoose.connect(process.env.MONGO_URL, (err) => {
//     err (console.log('no se pudo conectar con el MONGO_URL'))
//})




export default mongoConnect;

