const express = require('express');
const app = express();
const path = require('node:path');

const { getUser } = require('./controller/messageController');
const { getUserByID } = require('./database/queries');
const messageRouter = require('./routes/messageRouter');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/new', messageRouter);

app.get('/message/:messageId', async (req, res) => {
  const { messageId } = req.params;
  const user = await getUserByID(messageId);
  res.render('message', { user: user[0] });
});

app.get('/', getUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App running on port ${PORT}`);
});
