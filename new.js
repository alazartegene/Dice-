var rand1 = Math.floor(Math.random()*6)+1;
var randSource1="images/dice"+rand1+".png";
var image1=document.querySelectorAll('img')[0];
image1.setAttribute('src',randSource1);

var rand2 = Math.floor(Math.random()*6)+1;
var randSource2="images/dice"+rand2+".png";
var image2=document.querySelectorAll('img')[1];
image2.setAttribute('src',randSource2);


if (rand1 > rand2) {
  document.querySelector("h1").innerHTML="🔺Playe 1 is winner";
}
else if (rand1 < rand2) {
  document.querySelector("h1").innerHTML="Player 2 is winner🔺";
}
else {
  document.querySelector("h1").innerHTML="Draw!";
}
