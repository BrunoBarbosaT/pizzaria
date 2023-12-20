import { Router} from "express"

import { isAutenticated } from "./Middilawere/isAuthenticated"

import { CreateUserController } from './Users/Controller/CreateUserController'
import { AuthUSerController } from "./Users/Controller/AuthUserController"
import { DetailUserController } from "./Users/Controller/DetailUserController"
import { CreateCategoryController } from "./Category/Controller/CreateCategoryController"
import { ListCategoryController } from "./Category/Controller/ListCategoryController"


const router = Router();


//--ROTAS USER --//
router.post('/users', new CreateUserController().headle)
router.post('/session', new AuthUSerController().handle)
router.get('/details',isAutenticated, new DetailUserController().handle)

//--ROTAS CATEGORY --//
router.post('/category', isAutenticated, new CreateCategoryController().handle)
router.get('/category',  isAutenticated, new ListCategoryController().handle) 

export{ router}