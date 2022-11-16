import { Request, Response } from 'express';
import Accounts from "../database/models/Accounts";

const getAll = async (_req: Request, res: Response) => {
  const get = await Accounts.findAll();

  return res.json(get)
}

export default {
  getAll,
}