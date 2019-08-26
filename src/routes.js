import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'taynan',
    email: 'taynacid123@gmail.com',
    password_hash: '123123',
  });

  res.json(user);
});

module.exports = routes;
