import { Request, Response } from 'express';
import Accounts from '../database/models/Accounts';

const getAll = async (req: Request, res: Response) => {
  const get = await Accounts.findAll();

  return res.json(get);
};

const getBalanceById = async (req: Request, res: Response) => {
  const { accountId } = req.body;
  const get = await Accounts.findOne({ where: { id: accountId } });

  return res.json(get);
};

export default {
  getBalanceById,
  getAll
};