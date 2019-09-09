let express = require('express');
let router = express.Router();

const tournamentsArray = [
    {
        name: 'Australian Open',
        location: 'Melbourne, Australia',
    },
    {
        name: 'French Open',
        location: 'Paris, France',
    },
    {
        name: 'Wimbledon',
        location: 'Wimbledon, England',
    },
    {
        name: 'US Open',
        location: 'NYC, New York',
    },
];

router.get('/', (req, res) => {
    res.send(tournamentsArray);
})

module.exports = router;