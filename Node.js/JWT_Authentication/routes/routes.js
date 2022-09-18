const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

router.post('/register', async (req, res) => {
  // const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  const result = await user.save();

  const { password, ...data } = await result.toJSON();
  res.send(data);
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).send({
      message: 'user not found',
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({
      message: 'invalid credentials',
    });
  }

  const token = jwt.sign({ _id: user._id }, 'secret');

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.send({
    message: 'success',
  });
});

router.get('/user', async (req, res) => {
  try {
    const cookie = req.cookies['jwt'];

    const clains = jwt.verify(cookie, 'secret');

    if (!clains) {
      return res.status(401).send({
        message: 'unauthenticated',
      });
    }

    const user = await User.findOne({ _id: clains._id });

    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch (error) {
    return res.status(401).send({
      message: 'unauthenticated',
    });
  }
});

router.post('/logout', (req, res) => {
  res.cookie('jwt', '', { maxAge: 0 });

  res.send({
    message: 'success',
  });
});

module.exports = router;
