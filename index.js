// image 1
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomdDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomdDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1)

// image 2
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomdDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomdDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2)

// results
var heading = document.querySelector("h1");
if (randomNumber1<randomNumber2) {
    heading.innerHTML = "Player 2 wins 🚩";
}
else if (randomNumber1>randomNumber2) {
    heading.innerHTML = "Player 1 wins 🚩";
}
else {
    heading.innerHTML = "Draw!";
}