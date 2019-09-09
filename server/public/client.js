$(document).ready(onReady);

function onReady() {
    // load data from the server, put it on the DOM
    getPlayerData();
    getTournamentData();
    $('#add').on('click', postPlayerData);

}

// get artist data from the server
function getPlayerData() {
    $("#playerTableBody").empty();
    $.ajax({
        type: 'GET',
        url: '/players'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let player = response[i];
            $('#playerTableBody').append(`
                <tr>
                    <td>${player.firstName}</td>
                    <td>${player.lastName}</td>
                    <td>${player.born}</td>
                </tr>
            `);
        }
    });
}

// get song data from the server
function getTournamentData() {
    $.ajax({
        type: 'GET',
        url: '/tournaments'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let tournament = response[i];
            $('#tournamentTableBody').append(`
                <tr>
                    <td>${tournament.name}</td>
                    <td>${tournament.location}</td>
                </tr>
            `);
        }
    });
}

function postPlayerData() {
    console.log('yes');
    let payloadObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        born: $('#born').val()
    }
    console.log('yo', payloadObject)
    $.ajax({
        type: 'POST',
        url: '/players',
        data: payloadObject
    }).then( function (response) {
        $('#firstName').val(''),
        $('#lastName').val(''),
        $('#born').val('')
        console.log('response', response);
        getPlayerData();
    });
}