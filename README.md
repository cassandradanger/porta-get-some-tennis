# Get Some Tennis AJAX

- Fork
- Clone
- `npm install` to get all of the dependencies (just `express` for now)

Install [Postman](https://www.getpostman.com/downloads/), if you haven't already.


## Base

- Look at the pattern for the working `/players` AJAX request. The client side is all set up for `/tournaments`, but the server side code isn't there. Add the server side code. Test with Postman!
- Add a POST route to the server.js file to allow a new player to be added. Test with Postman!
- Add a form to the `index.html` & update `client.js` to do an Ajax POST request, allowing a new player to be added.

In the comments on the submission write down what you think is happening:

1. When the page is loaded on the client
2. When the submit button is clicked to add a song

## Stretch

- Our `.then` is getting cluttered. Let's move the appending looping code into their own functions
- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `player.js` and `tournament.js` would be good).
- Add a new POST route and form to add an artist. 
- The `/player` and `/tournament` requests are working! Add a third table for albums that has `name` and `location` for the most recent player to win that tournament.
