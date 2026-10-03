const { Router } = require('express');
const { insertUserInput } = require('../controller/messageController.js');

const messageRouter = Router();

messageRouter.post('/', insertUserInput);

messageRouter.get('/', (req, res) => {
  res.render('form');
});

module.exports = messageRouter;
