import { Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import Accounts from '../database/models/Accounts';
import Users from '../database/models/Users';

const SECRET: string = process.env.JWT_SECRET || 'jwt_secret';

const getAll = async (_req: Request, res: Response) => {
  const get = await Users.findAll();

  return res.json(get)
}

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ where: { username } });
  if (!user) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }

  const findByPassword = bcrypt.compareSync(password, user.password);

  if (!findByPassword) {
    return res.status(401).json({ message: 'Incorrect username or password' });
    
  }

  const token = sign({ username }, SECRET, { expiresIn: '1d' });

  return res.status(200).json({ token, username, accountId: user.accountId });

}

const create = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const verifyUserExist = await Users.findOne({ where: { username } });
  if (verifyUserExist) {
    return res.status(404).json({ message: "User already registered" });
    
  }

  const createAccount = await Accounts.create({ balance: 100.00 })
  const hashedPassword = await bcrypt.hash(password, 10)
  
  await Users.create(
    { username, password: hashedPassword, accountId: createAccount.id }
  );

  const token = sign({ username }, SECRET, { expiresIn: '1d' });

    return res.status(201).json({ token, username, accountId: createAccount.id });
  
}

export default {
  getAll,
  login,
  create,
}