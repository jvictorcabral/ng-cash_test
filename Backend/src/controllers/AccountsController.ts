import { Request, Response } from 'express';
import Accounts from "../database/models/Accounts";

const getAll = async (req: Request, res: Response) => {
  const get = await Accounts.findAll();

  return res.json(get)
}

const create = async (req: Request, res: Response) => {
  const { balance } = req.body
  const creating = await Accounts.create({ balance })

  return res.json(creating)
}

export default {
  getAll,
  create,
}