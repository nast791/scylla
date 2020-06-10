const {Router} = require('express');
const router = Router();
const {validationResult} = require('express-validator');
const {refreshUserValidators} = require("../validation/auth.validation");
const User = require('../models/user.model');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const config = require('../../config');
// const storage = new GridFsStorage({url: config.MONGODB_URL,   file: (req, file) => {
//     return {
//       filename: 'file_' + Date.now()
//     };
//   }});
// const upload = multer({storage});

//upload.single('avatar')

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
    console.log(req.files, req.file);
    const user = await User.findOneAndUpdate({email}, {name, surname, gender, birthDate, city, family, status, hobby}, {new: true});
    await user.save();
    res.json({ user, msg: 'Сохранено' });
  } catch (e) {
    res.status(500).json({message: 'Ошибка отправки данных'});
  }
});

module.exports = router;