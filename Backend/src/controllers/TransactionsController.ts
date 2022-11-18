import { Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { Op } from 'sequelize';
import Transactions from '../database/models/Transactions';
import Users from '../database/models/Users';
import editBalance from '../services/TransactionsSerice';

const SECRET: string = process.env.JWT_SECRET || 'jwt_secret';

const getAll = async (req: Request, res: Response) => {
  const get = await Transactions.findAll();

  return res.json(get)
}

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const get = await Transactions.findByPk(id);

  return res.status(200).json(get)
}

const createTransation = async (req: Request, res: Response) => {
  const { debitedAccount, creditedAccount, value } = req.body;

  try {
    const getDebitedId = await Users.findOne({ where: { username: debitedAccount } })
  
    const getCreditedId = await Users.findOne({ where: { username: creditedAccount } })
  
    if (getDebitedId && getCreditedId) {
      if (getDebitedId.accountId !== getCreditedId.accountId) {
        // editBalance(getDebitedId.accountId, getCreditedId.accountId, value)
        const { status, message } = await editBalance(getDebitedId.accountId, getCreditedId.accountId, value);
        if (status === 404) {
          return res.status(status).json(message)
        }
        const create = await Transactions.create(
          {
            debitedAccountId: getDebitedId.accountId,
            creditedAccountId: getCreditedId.accountId,
            value,
          }
        )
        return res.status(201).json(create)
      }
    }
  
    return res.status(404).json()
  } catch (error) {
    return res.status(404).json({ message: "Insuficient Balance" })
  }

}

const getHistory = async (req: Request, res: Response) => {
  const auth = req.headers.authorization;

  if (auth) {
    const decoded = verify(auth, SECRET) as JwtPayload;

    const historyTransaction = await Transactions.findAll(
      {
        where: {
          [Op.or]: [
            { debitedAccountId: decoded.id },
            { creditedAccountId: decoded.id }
          ]
        }
      }
    )

    return res.status(200).json(historyTransaction);
  }


}

export default {
  createTransation,
  getAll,
  getById,
  getHistory
}