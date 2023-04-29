//config
export const AdminEmail = 'diegoby1994@gmail.com'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

 const mongoConnect =  mongoose.connect(process.env.MONGO_URL, (err) => {
    err (console.log('no se pudo conectar con el MONGO_URL'))
        
})

export default mongoConnect;

