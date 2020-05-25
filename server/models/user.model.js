const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  nickname: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: [{ type: Types.ObjectId, ref: 'Post'}]
});

module.exports = model('User', schema);