const express = require('express');
const controllers = require('../controllers/character.controller');

const characterClassRoutes = express.Router();

characterClassRoutes.get('/', controllers.getCharactersByClass);

characterClassRoutes
    .get('/:charClass', controllers.getCharactersByClass)

module.exports = characterClassRoutes;