#! /usr/bin/env node
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  created_at timestamp not null,
  messagetext text
);

INSERT INTO messages (username,created_at,messagetext) 
VALUES
  ('Amando', to_timestamp(${Date.now()}/1000),'Hi there!'),
  ('Charles',to_timestamp(${Date.now()}/1000),'Hi World!');
`;

async function initializeDatabase() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

initializeDatabase();
