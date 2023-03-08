import {Router} from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { SignInUserController } from './controller/SignInUserController'

const route = Router()

route.post('/register', new CreateUserController().handle)

route.post('/signIn', new SignInUserController().handle)

export {route}