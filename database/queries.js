const pool = require('./pool');

async function getAllUsers() {
  const { rows } = await pool.query(
    `SELECT messages.username,messages.messagetext,to_char(messages.created_at,'YYYY/MM/DD, HH12:MI:SS AM') AS created_at FROM messages`,
  );
  return rows;
}

async function insertUserInput(username, messagetext) {
  await pool.query('INSERT INTO messages (username,created_at,messagetext) VALUES($1,$2,$3)', [
    username,
    new Date(),
    messagetext,
  ]);
}

async function getUserByID(id) {
  const { rows } = await pool.query(
    `SELECT messages.username,messages.messagetext,to_char(messages.created_at,'YYYY/MM/DD, HH12:MI:SS AM') AS created_at FROM messages WHERE messages.id=$1`,
    [Number(id)],
  );
  return rows;
}

module.exports = {
  getAllUsers,
  insertUserInput,
  getUserByID,
};
