const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is index page');
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`App running on port ${PORT}`);
});
