import express from 'express'
import * as userController from '../controllers/user.controller.js'
import { logIn } from '../controllers/user.controller.js'

export const userRouter = express.Router();

userRouter.get('/login', userController.logInView)
userRouter.get('/signup', userController.signUpView)
userRouter.get('/', userController.homeView)
userRouter.get('/logout', userController.logOutView)
userRouter.post('/signup', userController.signUp)
userRouter.post('/login', userController.logIn)

