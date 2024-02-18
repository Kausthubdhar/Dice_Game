var dice1 = Math.floor((Math.random() * 6) + 1);
var dice2 = Math.floor((Math.random() * 6) + 1);

var str1 = "./images/dice" + dice1 + ".png";
var str2 = "./images/dice" + dice2 + ".png";

if(dice1 > dice2) document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
else if(dice1 === dice2) document.querySelector("h1").innerHTML = "🏁 DRAW 🏁";
else document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";

document.querySelector(".img1").setAttribute("src", str1);
document.querySelector(".img2").setAttribute("src", str2);