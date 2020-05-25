const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const {registerValidators} = require('../validation/auth.validation');
const User = require('../models/user.model');

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
    res.status(201).json({message: 'Новый пользователь создан.'});
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
    res.json({ user });
  } catch (e) {
    res.status(500).json({message: 'Ошибка логина'});
  }
});

module.exports = router;