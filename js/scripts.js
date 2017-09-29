// Business Logic

// Constructor and prototype for the object Die
function Die() {};

Die.prototype.roll = function() {
  //smallest integer greater than or equal to the given random number
  // for nothing higher than 6 or lower than 1
  return Math.ceil(Math.random() * 6);
};

Die.prototype.hold = function() {

};

// Constructor and prototype for the object player
function Player() {
  this.name = name;
  this.score = [];
  this.totalScore = 0;
  this.active = true;
}

Player.prototype.addScore = function(number) {
  this.score.push(number);
  this.totalScore += number
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
