import express  from "express";
import { productRouter } from "./src/routers/product.router.js";
import { cartRouter } from "./src/routers/cart.router.js";
import { userRouter } from "./src/routers/user.router.js";
import session from 'express-session';
import path from 'path';
import {fileURLToPath} from 'url';
import mongoStore from 'connect-mongo';
import compression from 'compression';
import minimist from 'minimist';
import dotenv from 'dotenv'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use(compression());

app.use(
    session({
        store: mongoStore.create({
            mongoUrl: process.env.MONGO_URL,
            options: {
                userNewParser: true,
                useUnifiedTopology: true,
            }
        }),
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: 600000} //10 min.
        
}))

app.use('/api/productos', productRouter);
app.use('/api/carrito', cartRouter);
app.use('/api/usuario', userRouter);



app.all("*", (req, res) => {
    res.status(404).json({"error": "ruta no existente"})
  });

//SERVER

const PORT = process.env.PORT ?? 8080

app.listen(process.env.PORT, () => {
    console.log(`🚀 servidor funcionando en http://localhost:${PORT}`)
    })


