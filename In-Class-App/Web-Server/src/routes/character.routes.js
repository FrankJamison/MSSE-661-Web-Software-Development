const express = require('express');
const controllers = require('../controllers/character.controller');

const characterRoutes = express.Router();

characterRoutes.get('/', controllers.getAllCharacters).post('/', controllers.createCharacter);

characterRoutes
    .get('/:charId', controllers.getCharacter) // GET http://locahost:3000/tasks/1
    .put('/:charId', controllers.updateCharacter)
    .delete('/:charId', controllers.deleteCharacter);

module.exports = characterRoutes;