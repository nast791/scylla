const {body} = require('express-validator');
const User = require('../models/user.model');

exports.registerValidators = [
  body('nickname')
    .isLength({min: 3, max: 20}).withMessage('Разрешенная длина никнейма - от 3 до 20 символов')
    .custom(async value => {
    try {
      const user = await User.findOne({nickname: value});
      if (user) return Promise.reject('Такой никнейм уже занят');
    } catch (e) { console.log(e); }})
    .custom(value => !value.trim().includes(' ')).withMessage('В никнейме не должно быть пробелов')
    .trim().escape(),
  body('name')
    .isLength({min: 3, max: 20}).withMessage('Разрешенная длина имени - от 3 до 20 символов')
    .custom(value => !value.trim().includes(' ')).withMessage('В имени не должно быть пробелов')
    .trim().escape(),
  body('email')
    .isEmail().withMessage('Введите корректный email')
    .custom(async value => {
    try {
      const user = await User.findOne({email: value});
      if (user) return Promise.reject('Такой email уже занят');
    } catch (e) { console.log(e); }})
    .normalizeEmail().trim(),
  body('password')
    .isLength({min: 6}).withMessage('Длина пароля минимум 6 символов')
    .isAlphanumeric().withMessage('Пароль может состоять только из цифр и букв')
    .custom(value => !value.trim().includes(' ')).withMessage('В пароле не должно быть пробелов')
    .trim(),
  body('confirm')
    .custom((value, {req}) => value === req.body.password).withMessage('Пароли должны совпадать')
    .trim(),
];