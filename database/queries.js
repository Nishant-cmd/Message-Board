const pool = require('./pool');

async function getAllUsers() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function insertUserInput(username, messagetext) {
  await pool.query('INSERT INTO messages (username,created_at,messagetext) VALUES($1,$2,$3)', [
    username,
    new Date(),
    messagetext,
  ]);
}

module.exports = {
  getAllUsers,
  insertUserInput,
};
