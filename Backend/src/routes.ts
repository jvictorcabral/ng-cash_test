import express from 'express';
import AccountsController from './controllers/AccountsController';
import UsersController from './controllers/UsersController';
import validateLogin from './middlewares/validateLogin';

const routes = express.Router();

routes.get('/', (_req, res) => {
  return res.json({ message: "Hello Word" })
})

routes.get('/accounts', AccountsController.getAll)
routes.post('/accounts', AccountsController.create)

routes.post('/users', validateLogin, UsersController.login)
routes.post('/users/register', validateLogin, UsersController.create)


export default routes;