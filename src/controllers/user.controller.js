import { UsuarioService } from "../services/usuarios.service.js";
import { sendGmail } from "../utils/notifications/EmailSender.js";
import { newUserTemplate } from "../utils/notifications/newUser.js";
import session from "express-session";

const usuarioService = UsuarioService.getInstance();

export async function logInView(req, res) {
    if (req.session.login) {
        res.json({ redirectTo: '/api/usuario'})
    } else {
        res.json({status: false})
    }
}

export async function signUpView(req, res) {
    if (req.session.login) {
        res.json({ redirectTo: '/api/usuario'})
    } else {
        res.json({status: false})
    }
}

export async function signUp(req, res) {
    const { body } = req;
    const newUser = await usuarioService.createUser(body);

    if (newUser) {
        
        const date = new Date();
        const newUserTemplateEmail = newUserTemplate(newUser._id, date.toLocaleString());
        await sendGmail('Nuevo usuario creado', newUserTemplateEmail);
        
        res.status(200).json({"success": "usuario agregado con id " + newUser._id})
    } else {
        res.status(400).json({"error": "verificar contenido y schema"})
    }

}

export async function logIn(req, res) {
    const {user, pass} = req.body;
    const loggedUser = await usuarioService.loginUser({
        username: user,
        password: pass
    });

    if (loggedUser) {
        req.session.login=true;
        res.json({redirectTo: '/api/usuario'})
        console.log('funcionó')
    } else {
        req.session.login=false;
        res.json({redirectTo: '/api/usuario/login'})
        console.log('No funcionó')
    }
}

//export async function homeView(req, res) {
//    res.render('pages/home', {status: req.session.login})
//}

export async function homeView(req, res) {
    const response = {
        message: "La aplicación funciona correctamente",
        status: req.session.login
    }
    res.json(response);
}

export async function logOutView(req, res) {
    if (!req.session.login) {
        res.json({redirectTo: '/api/usuario'})
    } else {
        req.session.destroy( (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json( {status: false});
            }
        })
    }
}

