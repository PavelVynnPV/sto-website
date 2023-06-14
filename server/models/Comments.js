const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true,
  },
  // Дополнительные поля ответа
  // ...
});

const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true,
  },
  starRate: {
    type: String,
    required: true,
  },
  replies: [replySchema], // Поле 'replies' для хранения ответов
  // Дополнительные поля комментария
  // ...
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;