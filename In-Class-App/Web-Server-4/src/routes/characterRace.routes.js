const express = require('express');
const controllers = require('../controllers/character.controller');

const characterRaceRoutes = express.Router();

characterRaceRoutes.get('/', controllers.getCharacterByRace);

/**
 * Routes for a character by name. Evalutes to `/character/name/:charName`.
 */
characterRaceRoutes
    .get('/:charRace', controllers.getCharacterByRace) // GET http://locahost:3000/character/name/[name]

module.exports = characterRaceRoutes;