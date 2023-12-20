import { Router} from "express"

import { CreateUserController } from './Users/Controller/CreateUserController'
import { AuthUSerController } from "./Users/Controller/AuthUserController";
import { DetailUserController } from "./Users/Controller/DetailUserController";
import { isAutenticated } from "./Middilawere/isAuthenticated";
const router = Router();


//--ROTAS USER --//
router.post('/users', new CreateUserController().headle)
router.post('/session', new AuthUSerController().handle)
router.get('/details',isAutenticated, new DetailUserController().handle)

export{ router}