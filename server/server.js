const express = require('express');
const bodyParser = require( 'body-parser' );

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use( bodyParser.urlencoded( { extended: true } ) )


let tournamentsRouter = require('./routes/tournaments_router');
app.use('/tournaments', tournamentsRouter);

let playersRouter = require('./routes/players_router.js');
app.use('/players', playersRouter)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});