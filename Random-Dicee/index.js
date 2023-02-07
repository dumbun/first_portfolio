var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1-6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice2.png

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 wins 🏅"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = " player 2 wins 🏅"
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "draw 🤝"
}








// easy way:-

// if (randomNumber1 === 1) {
//     document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//     document.querySelector(".heading").textContent = "Player2 wins";

// }
// if (randomNumber1 === 2) {
//     document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//     document.querySelector(".heading").textContent = "Player 1 wins";
// }
// if (randomNumber1 === 3) {
//     document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//     documnet.querySelector(".heading").textContent = "Player 2 wins";
// }
// if (randomNumber1 === 4) {
//     document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//     document.querySelector(".heading").textContent = "Player 1 wins";
// }
// if (randomNumber1 === 5) {
//     document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//     document.querySelector(".heading").textContent = "Player 1 wins";

// }
// if (randomNumber1 === 6) {
//     document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//     document.querySelector(".heading").textContent = "Player 1 wins";
// }
