const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const {registerValidators} = require('../validation/auth.validation');
const User = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    if (req.session.isAuthenticated) {
      const user = await User.findById(req.session.userId);
      return res.json({user, csrf: req.csrfToken()});
    }
    res.json({csrf: req.csrfToken()});
  } catch (e) {
    res.status(500).json({message: 'Ошибка авторизации'});
  }
});

router.post('/register', registerValidators, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      });
    }
    const {nickname, name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User({nickname, name, email, password: hashedPassword});
    await user.save();
    res.status(201).json({message: 'Новый пользователь создан'});
  } catch (e) {
    res.status(500).json({message: 'Ошибка регистрации'});
  }
});

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message: 'Пользователь не найден'});
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message: 'Неверный пароль'});
    req.session.userId = user._id;
    req.session.isAuthenticated = true;
    req.session.save(err => {
      if (err) throw err;
    });
    res.json({ user });
  } catch (e) {
    res.status(500).json({message: 'Ошибка логина'});
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.end();
});

module.exports = router;