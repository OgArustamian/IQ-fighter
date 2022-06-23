const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const usernameExists = 'Этот логин уже существует.';
const emailExists = 'Этот email уже существует.';
const loginExists = 'Неверный логин или пароль';

router.route('/signUp')
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    if (username && email && password) {
      try {
        const createUser = await User.create(
          { ...req.body, password: await bcrypt.hash(password, Number(process.env.SALTROUND)) },
        );
        req.session.user = {
          id: createUser.id,
          username: createUser.username,
          email: createUser.email,
        };
        return res.json({ username, id: createUser.id });
      } catch (err) {
        if (err.parent.constraint == 'Users_email_key') { return res.json({ message: emailExists }); }
        if (err.parent.constraint == 'Users_username_key') { return res.json({ message: usernameExists }); }
        console.error(err);
        res.sendStatus(400);
      }
    }
    // return
  });

router.route('/signIn')
  .post(async (req, res) => {
    const { username, password } = req.body;
    if (username, password) {
      try {
        const findUser = await User.findOne({ where: { username } });
        if (findUser && await bcrypt.compare(password, findUser.password)) {
          req.session.user = {
            id: findUser.id,
            username: findUser.username,
            email: findUser.email,
          };
          return res.json({ username, id: findUser.id });
        }
        return res.json({ message: loginExists });
      } catch (err) {
        console.error(err);
        res.sendStatus(400);
      }
    }
    res.json({ message: loginExists });
  });

router.route('/signOut')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sessionID').sendStatus(200);
  });

router.route('/check')
  .post(async (req, res) => {
    if (req.session.user) {
      return res.json({ ...req.session.user });
    }
    res.sendStatus(400);
  });

module.exports = router;
