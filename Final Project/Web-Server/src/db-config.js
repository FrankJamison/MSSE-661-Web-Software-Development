const mysql = require('mysql');
const {
  CREATE_USERS_TABLE
} = require('./queries/user.queries');
const {
  CREATE_CHARS_TABLE
} = require('./queries/char.queries');
const query = require('./utils/query');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'frank';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'res0@L78';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'ancientwhitearmyvet';

const connection = async () =>
  new Promise((resolve, reject) => {
    const con = mysql.createConnection({
      host,
      user,
      password,
      database,
    });

    con.connect((err) => {
      if (err) {
        reject(err);
        return;
      }
    });

    resolve(con);
  });

// Create the connection with required details
(async () => {
  const _con = await connection().catch((err) => {
    throw err;
  });

  const userTableCreated = await query(_con, CREATE_USERS_TABLE).catch(
    (err) => {
      console.log(err);
    }
  );

  const charsTableCreated = await query(_con, CREATE_CHARS_TABLE).catch(
    (err) => {
      console.log(err);
    }
  );

  if (!!userTableCreated) {
    console.log('User Table Created!');
  }

  if (!!charsTableCreated) {
    console.log('Characters Table Created!');
  }
})();

module.exports = connection;