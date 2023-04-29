import { AdminEmail } from "../config/config.js";

export default function auth(req, res, next) {
    if (req.session.login) {
        next();
    } else {
        return res.status(401).send('No autorizado');
    }
}

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