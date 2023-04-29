import express from 'express'
import * as cartController from '../controllers/cart.controller.js'


export const cartRouter = express.Router()

cartRouter.get('/:id/productos', cartController.getProducts);
cartRouter.post('/', cartController.create);
cartRouter.post('/:id/productos', cartController.addProduct);
cartRouter.delete('/:id/productos/:id_prod', cartController.removeProduct);
cartRouter.delete('/:id', cartController.remove);

 