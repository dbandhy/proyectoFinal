import dotenv from 'dotenv'
import { AdminEmail } from "../config/config.js";

dotenv.config()

export default function auth(req, res, next) {
    const { username , email, password } = req.body;   
    
    if (username === process.env.USER && password === process.env.ADMIN_PASSWORD && email === process.env.ADMIN_EMAIL) {
        req.session.login = username;
        next();
    } else {
        return res.status(401).send('No autorizado');
    }
}

// export default function auth(req, res, next) {
    
//     if (req.session.login === AdminEmail) {
//         next();
//     } else {
//         return res.status(401).send('No autorizado');
//     }
// }

// import { AdminEmail } from "../config/config.js"

// function autenticacion (req, res, next) {
//     //si no tiene credenciales reboto error
//     req.user = {}
//     next()
// }

// function soloAdmins(req, res, next) {
//     if (req.user.email === config.AdminEmail)
//         return next()
//     return (new ErrorDePermisos())
// }