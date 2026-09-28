const { Router } = require("express");
const { messages, cleanDate } = require("../sampleMessage");

const messageRouter = Router();

messageRouter.post("/", (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: cleanDate() });
  res.redirect("/");
});

messageRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = messageRouter;
