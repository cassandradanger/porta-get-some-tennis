const express = require('express');
const router = express.Router();

let tennisPlayersArray = [
    {
        firstName: 'Serena',
        lastName: 'Williams',
        born: 1981,
    },
    {
        firstName: 'Arthur',
        lastName: 'Ashe',
        born: 1943,
    },
    {
        firstName: 'John',
        lastName: 'McEnroe',
        born: 1959,
    },
    {
        firstName: 'Naomi',
        lastName: 'Osaka',
        born: 1997,
    },
    {
        firstName: 'Andre',
        lastName: 'Agassi',
        born: 1970,
    },
    {
        firstName: 'Bille Jean',
        lastName: 'King',
        born: 1943,
    },
];

router.get('/', (req, res) => {
    res.send(tennisPlayersArray);
});

router.post('/', (req, res) => {
    console.log("HELLO FROM THE POST", req.body);
    res.sendStatus(200);
    tennisPlayersArray.push(req.body);
})

module.exports = router;