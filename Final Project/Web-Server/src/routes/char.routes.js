const express = require('express');
const {
  getAllChars,
  createChar,
  getChar,
  updateChar,
  deleteChar,
} = require('../controllers/char.controller');
const canAccess = require('../middleware/auth.middleware');

const charRoutes = express.Router();
/**
 * Express routes for Chars.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all chars. Evaluates to `/chars/`.
 */
charRoutes.get('/', canAccess, getAllChars).post('/', canAccess, createChar);

/**
 * Routes for a char by id. Evalutes to `/chars/:charId`.
 */
charRoutes
  .get('/:charId', canAccess, getChar) // GET http://locahost:3000/chars/1
  .put('/:charId', canAccess, updateChar)
  .delete('/:charId', canAccess, deleteChar);

module.exports = charRoutes;