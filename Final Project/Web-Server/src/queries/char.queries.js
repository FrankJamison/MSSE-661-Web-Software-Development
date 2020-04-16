exports.CREATE_CHARS_TABLE = `CREATE TABLE IF NOT EXISTS characters(
  id int NOT NULL AUTO_INCREMENT,
  charName varchar(255) NOT NULL,
  charRace varchar(255) NOT NULL,
  charClass varchar(255) NOT NULL,
  charSubclass varchar(255) NOT NULL,
  charLevel int NOT NULL,
  charFileName varchar(255) NOT NULL,
  charImageName varchar(255) NOT NULL,
  created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (id)
)`;

// Get every character
exports.ALL_CHARS = `SELECT * FROM characters ORDER BY charClass, charLevel, charSubclass, charRace, charName`;

// Get a single character by id
exports.SINGLE_CHAR = `SELECT * FROM characters WHERE id = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 *
 * Create a new character in `characters` table where
 * - column names match the order the are in the table
 * - `?` allow us to use params in our controllers
 */
exports.INSERT_CHAR = `INSERT INTO characters (charName, charRace, charClass, charSubclass, charLevel, charFileName, charImageName) VALUES (?,?,?,?,?,?,?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_CHAR = `UPDATE characters SET charName = ?, charRace = ?, charClass = ?, charSubclass = ?, charLevel = ?, charFileName = ?, charImageName = ? WHERE id = ?`;

// Delete a task by id
exports.DELETE_CHAR = `DELETE FROM characters WHERE id = ?`;