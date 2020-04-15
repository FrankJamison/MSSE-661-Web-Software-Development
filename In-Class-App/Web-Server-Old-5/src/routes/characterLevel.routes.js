const express = require('express');
const controllers = require('../controllers/character.controller');

const characterLevelRoutes = express.Router();

characterLevelRoutes.get('/', controllers.getCharactersByLevel);

characterLevelRoutes
    .get('/:charLevel', controllers.getCharactersByLevel)

module.exports = characterLevelRoutes;