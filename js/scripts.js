// Business Logic


function rollDice() {
  //smallest integer greater than or equal to the given random number
  // for nothing higher than 6 or lower than 1
  return Math.ceil(Math.random() * 6);

};



// User Interface Logic
$(document).ready(function() {
  $("form#player-selection").submit(function(event) {
    event.preventDefault();

    var player1 = $('#player1-name').val();
    var player2 = $('#player2-name').val();
    $('#display-players').show();
    $('#player1-Name').text(player1);
    $('#player2-Name').text(player2);

  });
});

// $("#roll-btn").click() {
// rollDice();
