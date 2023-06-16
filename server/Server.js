const express = require('express');
const app = express();
const port = 5001;
require('./db'); // Подключение к базе данных

const Comment = require('./models/Comments'); // Подключение модели комментария

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Обработка запросов комментариев
app.post('/comments', async (req, res) => {
  try {
    const { author, content, day, starRate } = req.body; // Получение данных комментария из запроса

    const newComment = new Comment({
      author,
      content,
      day,
      starRate
    });

    const savedComment = await newComment.save(); // Сохранение комментария в базе данных

    res.status(201).json({ message: 'Комментарий успешно создан', comment: savedComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при создании комментария' });
  }
});

app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find(); // Получение списка комментариев из базы данных
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении комментариев' });
  }
});

// Обработка запросов ответов
app.post('/comments/:commentId/replies', async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { author, content, day } = req.body;

    const comment = await Comment.findById(commentId);
    
    if (!comment) {
      return res.status(404).json({ message: 'Комментарий не найден' });
    }

    comment.replies.push({ author, content, day });
    const savedComment = await comment.save();

    // Возвращаем объект ответа с полем "replies"
    res.status(201).json({ message: 'Ответ успешно создан', comment: savedComment, replies: savedComment.replies });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при создании ответа' });
  }
});
app.get('/comments/:commentId/replies', async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Комментарий не найден' });
    }

    res.json(comment.replies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении ответов' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});