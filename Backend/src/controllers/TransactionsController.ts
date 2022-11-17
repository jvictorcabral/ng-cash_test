import { Request, Response } from 'express';
import Transactions from '../database/models/Transactions';
import Users from '../database/models/Users';
import editBalance from '../services/TransactionsSerice';

const getAll = async (req: Request, res: Response) => {
  const get = await Transactions.findAll();

  return res.json(get)
}

const createTransation = async (req: Request, res: Response) => {
  try {
    const { debitedAccount, creditedAccount, value } = req.body;

    const getDebitedId = await Users.findOne({ where: { username: debitedAccount } })
    
    const getCreditedId = await Users.findOne({ where: { username: creditedAccount } })
    
    if (getDebitedId && getCreditedId) {
      if (getDebitedId.accountId !== getCreditedId.accountId) {
        editBalance(getDebitedId.accountId, getCreditedId.accountId, value)
        const create = await Transactions.create(
          {
            debitedAccountId: getDebitedId.accountId,
            creditedAccountId: getCreditedId.accountId,
            value,
          }
        )
        return res.json(create)
      }
    }

    return res.status(404).json({ message: "verifique os dados informados" })
  } catch (err) {

  }

}

export default {
  createTransation,
  getAll
}