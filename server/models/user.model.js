const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  nickname: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  posts: [{ type: Types.ObjectId, ref: 'Post'}],
  surname: {type: String},
  gender: {type: String},
  birthDate: {type: String},
  city: {type: String},
  family: {type: String},
  status: {type: String},
  hobby: {type: String},
  avatar: {data: Buffer, contentType: String}
});

module.exports = model('User', schema);