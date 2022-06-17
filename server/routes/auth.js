const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const usernameExists = 'Этот логин уже существует.';
const emailExists = 'Этот email уже существует.';

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
          email: createUser.email,
        };
        return res.sendStatus(200);
      } catch (err) {
        console.error(err);
        //   res.json()
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
        if (username && await bcrypt.compare(password, findUser.password)) {
          req.session.user = {
            id: findUser.id,
            email: findUser.email,
          };
          return res.sendStatus(200);
        }
        // res.json()
      } catch (err) {
        console.error(err);
        // res.json()
      }
    }
    // return
  });

router.route('/signOut')
  .get((req, res) => {
    res.session.destroy();
    res.clearCookie('sessionID').sendStatus(200);
  });

module.exports = router;
