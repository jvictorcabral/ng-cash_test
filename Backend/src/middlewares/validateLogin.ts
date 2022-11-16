import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';

const joiPassword = Joi.extend(joiPasswordExtendCore);

const errorMessage = 'Incorrect username or password';
const errorEmptyMessage = 'All fields must be filled';

const VALIDATE = Joi.object({
  username: Joi.string().min(3).required()
    .messages({
      'string.empty': errorEmptyMessage,
      'any.required': errorEmptyMessage,
      'string.min': errorMessage,
    }),
  password: joiPassword
    .string()
    .min(8)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .required()
    .messages({
      'string.empty': errorEmptyMessage,
      'any.required': errorEmptyMessage,
      'string.min': errorMessage,
    }),
});

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const { error } = VALIDATE.validate({ username, password });

  if (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default validateLogin;
