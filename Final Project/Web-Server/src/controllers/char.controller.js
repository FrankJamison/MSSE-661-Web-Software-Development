const connection = require('../db-config');
const {
  ALL_CHARS,
  SINGLE_CHAR,
  INSERT_CHAR,
  UPDATE_CHAR,
  DELETE_CHAR,
} = require('../queries/char.queries');
const query = require('../utils/query');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

// http://localhost:3000/tasks
exports.getAllChars = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all tasks
  const chars = await query(con, ALL_CHARS).catch((err) => {
    res.send(err);
  });

  if (chars.length) {
    res.json(chars);
  }
};

// http://localhost:3000/tasks/1
exports.getChar = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query all task
  const char = await query(con, SINGLE_CHAR, [req.params.charId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (char.length) {
    res.json(char);
  }
};

// http://localhost:3000/tasks
/**
 * POST request -
 * {
 *  name: 'A task name'
 * }
 */
exports.createChar = async (req, res) => {
  // verify valid token
  const decoded = req.user; // {id: 1, iat: wlenfwekl, expiredIn: 9174323 }

  // take result of middleware check
  if (decoded.id) {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });

    // query add task
    const result = await query(con, INSERT_CHAR, [req.body.charName, req.body.charRace, req.body.charClass, req.body.charSubclass, req.body.charLevel, req.body.charFileName, req.body.charImageName]).catch(
      (err) => {
        res.send(err);
      }
    );
    console.log(result);

    if (result.affectedRows === 1) {
      res.json({
        message: 'Added character successfully!'
      });
    }
  }
};

// http://localhost:3000/tasks/1
/**
 * PUT request -
 * {
 *  name: 'A task name',
 *  state: 'completed'
 * }
 */
exports.updateChar = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query update task
  const result = await query(con, UPDATE_CHAR, [
    req.body.charName,
    req.body.charRace,
    req.cody.charClass,
    req.body.charSubclass,
    req.body.charLevel,
    req.body.charFileName,
    req.body.charImageName,
    req.params.charId,
  ]).catch((err) => {
    res.send(err);
  });

  if (result.affectedRows === 1) {
    res.json(result);
  }
};

// http://localhost:3000/chars/1
exports.deleteChar = async (req, res) => {
  // establish connection
  const con = await connection().catch((err) => {
    throw err;
  });

  // query delete task
  const result = await query(con, DELETE_CHAR, [req.params.charId]).catch(
    (err) => {
      res.send(err);
    }
  );

  if (result.affectedRows === 1) {
    res.json({
      message: 'Deleted successfully.'
    });
  }
};