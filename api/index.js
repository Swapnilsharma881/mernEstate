import dotenv from 'dotenv';
import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

// Load environment variables from .env file
dotenv.config();

// Create and configure the database client
const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// Connect to the database
db.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');

  })
  .catch((err) => {
    console.error('Connection error', err.stack);
  });


const app = express();
const port = process.env.PORT || 5000;

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM user');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).send('Server error');
    }
  });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
