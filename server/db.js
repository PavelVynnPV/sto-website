const mongoose = require('mongoose');

const url = "mongodb+srv://StoAuto:S1t2o3a4@cluster0.am38da5.mongodb.net/Stobox?retryWrites=true&w=majority";

// Подключение к базе данных
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Успешное подключение к базе данных' + url))
  .catch(error => console.log('Ошибка при подключении к базе данных:', error));