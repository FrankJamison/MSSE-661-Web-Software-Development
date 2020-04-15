exports.CREATE_CHARACTERS_TABLE = `CREATE TABLE IF NOT EXISTS characters(
    id int NOT NULL AUTO_INCREMENT,
    charName varchar(255) NOT NULL,
    charRace varchar(255) NOT NULL,
    charClass varchar(255) NOT NULL,
    charLevel int NOT NULL,
    filename varchar(255) NOT NULL,
    created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
  )`;

// Get all characters
exports.ALL_CHARACTERS = `SELECT * FROM characters`;

// Get Character by id
exports.SINGLE_CHARACTER = `SELECT * FROM characters WHERE id = ?`;

// Get characters by name
exports.CHARACTERS_BY_NAME = `SELECT * FROM characters WHERE charName = ?`;

// Get characters by race
exports.CHARACTERS_BY_RACE = `SELECT * FROM characters WHERE charRace = ?`;

// Get characters by class
exports.CHARACTERS_BY_CLASS = `SELECT * FROM characters WHERE charClass = ?`;

// Get characters by level
exports.CHARACTERS_BY_LEVEL = `SELECT * FROM characters WHERE charLevel = ?`;

// Insert a character
exports.INSERT_CHARACTER = `INSERT INTO characters (charName,charRace,charClass,charLevel,filename) VALUES (?,?,?,?,?)`;

//Update a character by id
exports.UPDATE_CHARACTER = `UPDATE characters SET charName = ?, charRace = ?, charClass = ?, charLevel = ?, filename = ? WHERE id = ?`;

// Delete a character by id
exports.DELETE_CHARACTER = `DELETE FROM characters WHERE id = ?`;