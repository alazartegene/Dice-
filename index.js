// For player 1

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice one

var randomDiceImageSource1 = "images/" + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src',randomDiceImageSource1);

// for player 2

var randumNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImageSource2 = "images/dice" + randumNumber2 + ".png";

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src',randomDiceImageSource2);

// Annoncing the winner

if (randomNumber1 > randumNumber2) {
  document.querySelector("h1").innerHTML="🔺Playe 1 is winner";
}
else if (randumNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 is winner🔺";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
