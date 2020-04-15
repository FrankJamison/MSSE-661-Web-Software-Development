const mysql = require('mysql');
const authQueries = require('./queries/auth.queries');
const tasksQueries = require('./queries/tasks.queries');
const characterQueries = require('./queries/character.queries');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'frank';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'res0@L78';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'tododb';

// Create the connection with required details
const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

// Connect to the database.
con.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');

    con.query(authQueries.CREATE_USERS_TABLE, function (err, result) {
        if (err) throw err;
        console.log('Users table created or exists already!');
    });

    con.query(tasksQueries.CREATE_TASKS_TABLE, function (err, result) {
        if (err) throw err;
        console.log('Tasks table created or exists already!');
    });

    con.query(characterQueries.CREATE_CHARACTERS_TABLE, function (err, result) {
        if (err) throw err;
        console.log('Characters table created or exists already!');
    });
});

module.exports = con;