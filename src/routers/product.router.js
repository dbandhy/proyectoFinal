import express from 'express'
import * as productController from '../controllers/product.controller.js'
import auth from '../middleware/auth.middleware.js'


export const productRouter = express.Router()

productRouter.get('./', productController.getAll)
productRouter.get('/:id', productController.getById)

//auth
productRouter.post('/', auth, productController.create)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', auth, productController.remove)

