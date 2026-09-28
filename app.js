const express = require("express");
const path = require("node:path");
const { messages } = require("./sampleMessage");
const messageRouter = require("./routes/messageRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/new", messageRouter);

app.get("/message/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("message", { message: messages[Number(messageId)] });
});

app.get("/", (req, res) => {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App running on port ${PORT}`);
});
