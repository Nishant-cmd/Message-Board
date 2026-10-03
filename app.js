const express = require('express');
const app = express();
const path = require('node:path');
const { loadEnvFile } = require('node:process');
loadEnvFile('./.env');
const { initializeDatabase } = require('./database/populatedb');
initializeDatabase();

const { getUser, getUserByID } = require('./controller/messageController');
const messageRouter = require('./routes/messageRouter');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use('/new', messageRouter);

app.get('/message/:messageId', (req, res) => {
  const { messageId } = req.params;
  const user = getUserByID(messageId);
  res.render('message', { user: user });
});

app.get('/', getUser);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App running on port ${PORT}`);
});
