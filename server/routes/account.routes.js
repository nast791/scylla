const {Router} = require('express');
const router = Router();
const User = require('../models/user.model');

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({nickname: req.params.id});
    res.json({user});
  } catch (e) {
    res.status(500);
  }
});

module.exports = router;