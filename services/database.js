const mysql = require('mysql2/promise');
// require('dotenv').config(); // Charger les variables d'environnement

async function query(sql, params) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  } finally {
    await connection.end(); // Fermer la connexion proprement
  }
}

module.exports = { query };
