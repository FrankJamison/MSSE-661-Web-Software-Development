const express = require('express');
const controllers = require('../controllers/character.controller');

const characterNameRoutes = express.Router();

characterNameRoutes.get('/', controllers.getCharacterByName);

/**
 * Routes for a character by name. Evalutes to `/character/name/:charName`.
 */
characterNameRoutes
    .get('/:charName', controllers.getCharacterByName) // GET http://locahost:3000/character/name/[name]

module.exports = characterNameRoutes;