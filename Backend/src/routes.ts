import express from 'express';
import AccountsController from './controllers/AccountsController';
import UsersController from './controllers/UsersController';
import validateToken from './middlewares/validateToken';
import validateLogin from './middlewares/validateLogin';

const routes = express.Router();

routes.get('/', (_req, res) => {
  return res.json({ message: "Hello Word" })
})

routes.post('/balance', validateToken, AccountsController.getBalanceById)

routes.get('/users', UsersController.getAll)
routes.post('/users', validateLogin, UsersController.login)
routes.post('/users/register', validateLogin, UsersController.create)


export default routes;