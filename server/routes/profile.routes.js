const {Router} = require('express');
const router = Router();
const {validationResult} = require('express-validator');
const {refreshUserValidators} = require("../validation/auth.validation");
const User = require('../models/user.model');

router.post('/refresh-user', refreshUserValidators, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные'
      });
    }
    const {email, name, surname, gender, birthDate, city, family, status, hobby, avatar} = req.body;
    let user = await User.findOneAndUpdate({email}, {name, surname, gender, birthDate, city, family, status, hobby, avatar}, {new: true});
    await user.save();
    res.json({ user, msg: 'Сохранено' });
  } catch (e) {
    console.log(e);
    res.status(500).json({message: 'Ошибка отправки данных'});
  }
});

module.exports = router;