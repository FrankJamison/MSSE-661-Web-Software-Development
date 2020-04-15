const con = require('../db-config');
const queries = require('../queries/character.queries');

exports.getAllCharacters = function (req, res) {
    con.query(queries.ALL_CHARACTERS, function (err, result, fields) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getCharacter = function (req, res) {
    con.query(queries.SINGLE_CHARACTER, [req.params.charId], function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getCharacterByName = function (req, res) {
    con.query(queries.CHARACTERS_BY_NAME, [req.params.charName], function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getCharacterByRace = function (req, res) {
    con.query(queries.CHARACTERS_BY_RACE, [req.params.charRace], function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getCharactersByClass = function (req, res) {
    con.query(queries.CHARACTERS_BY_CLASS, [req.params.charClass], function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.getCharactersByLevel = function (req, res) {
    con.query(queries.CHARACTERS_BY_LEVEL, [req.params.charLevel], function (err, result) {
        if (err) {
            res.send(err);
        }
        res.json(result);
    });
};

exports.createCharacter = function (req, res) {
    con.query(queries.INSERT_CHARACTER, [req.body.charName, req.body.charRace, req.body.charClass, req.body.charLevel, req.body.filename], function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log(result);
        res.json({
            message: 'Number of records inserted: ' + result.affectedRows
        });
    });
};

exports.updateCharacter = function (req, res) {
    con.query(
        queries.UPDATE_CHARACTER,
        [req.body.charName, req.body.charRace, req.body.charClass, req.body.charLevel, req.body.filename, req.params.charId],
        function (err, data) {
            if (err) {
                res.send(err);
            }
            res.json(data);
        }
    );
};

exports.deleteCharacter = function (req, res) {
    con.query(queries.DELETE_CHARACTER, [req.params.charId], function (err) {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Deleted successfully.'
        });
    });
};