var db = require('./database');

async function authenticateUser(identifiant, password){
  try {
    const [rows] = await db.query(
      `SELECT name, mail FROM user WHERE (name=? OR mail=?) AND password=?;`,
      [identifiant, identifiant, password]
    );

    if (rows.length > 0){
      return rows[0];
    } else {
      return null;
    } 
  } catch (err) {
    console.error('Please, check your credentials.', err);
  }
}

async function getTrials(){
  
  try {

    const [rows] = await db.query(
      `SELECT name FROM epreuve`
    );

    return rows;

  } catch (err) {
    console.error('Sorry, try later.', err);
    throw err;
  }
}

module.exports = {
  authenticateUser,
  getTrials
}