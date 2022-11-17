import { Request, Response } from 'express';
import Accounts from "../database/models/Accounts";

const getBalanceById = async (req: Request, res: Response) => {
  const { accountId } = req.body;
  const get = await Accounts.findOne({ where: { id: accountId } });

  return res.json(get)
}

export default {
  getBalanceById,
}