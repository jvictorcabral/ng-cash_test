import express from 'express';

const routes = express.Router();

routes.get('/', (_req, res) => {
  return res.json({ message: "Hello Word" })
})

export default routes;