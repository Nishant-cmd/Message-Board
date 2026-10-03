const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  time timestamp not null,
  message text
)

INSERT INTO messages (username,time,message) 
VALUES
  ('Amando', to_timestamp(${Date.now()}/1000),'Hi there!'),
  ('Charles',to_timestamp(${Date.now()}/1000),'Hi World!'),
`;

async function initializeDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

module.exports = { initializeDatabase };
