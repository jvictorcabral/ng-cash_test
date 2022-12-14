import express from 'express';
import AccountsController from './controllers/AccountsController';
import UsersController from './controllers/UsersController';
import validateToken from './middlewares/validateToken';
import validateLogin from './middlewares/validateLogin';
import TransactionsController from './controllers/TransactionsController';

const routes = express.Router();

routes.get('/', (_req, res) => {
  return res.json({ message: 'Hello Word' });
});

routes.get('/balance', validateToken, AccountsController.getAll);
routes.post('/balance', validateToken, AccountsController.getBalanceById);

routes.get('/users', validateToken, UsersController.getAll);
routes.post('/users', validateLogin, UsersController.login);
routes.post('/users/register', validateLogin, UsersController.create);

routes.post('/transaction', validateToken, TransactionsController.createTransation);
routes.get('/transaction/history', validateToken, TransactionsController.getHistory);
routes.post('/transaction/history', validateToken,
  TransactionsController.getHistoryFilter);
routes.post('/transaction/history/date', validateToken,
  TransactionsController.getHistoryFilterDate);
routes.get('/transaction/:id', validateToken, TransactionsController.getById);
routes.get('/transaction', validateToken, TransactionsController.getAll);


export default routes;