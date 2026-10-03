const db = require('../database/queries');

async function getUser(req, res) {
  const users = await db.getAllUsers();
  res.render('index', { title: 'Mini MessageBoard', users: users });
}

async function insertUserInput(req, res) {
  const { messageUser, messageText } = req.body;
  await db.insertUserInput(messageUser, messageText);
  res.render('/');
}

module.exports = {
  getUser,
  insertUserInput,
};
