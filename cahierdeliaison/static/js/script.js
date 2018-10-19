// var width = 300;
var width = window.innerWidth;
var widthNeg = -width;
var halfWidth = width/2;
var halfWidthNeg = -halfWidth;


var area = document.getElementById("area");
var cuboid = document.getElementById("cuboid");

var blockLeft = document.getElementById("cuboidLeft");
var blockFront = document.getElementById("cuboidFront");
var blockRight = document.getElementById("cuboidRight");
var blockBack = document.getElementById("cuboidBack");

var liLeft = document.getElementById("toLeft");
var liRight = document.getElementById("toRight");


cuboid.style.perspective = (width*4)+'px';
area.style.width = width+'px';

PositionLeft  = 'translateZ('+halfWidth+'px)    translateX('+(halfWidthNeg)+'px) rotateY(-90deg)';
PositionFront = 'translateZ('+halfWidth+'px)    translateX(0px)                  rotateY(0deg)';
PositionRight = 'translateZ('+halfWidthNeg+'px) translateX('+(halfWidth)+'px)    rotateY(90deg)';
PositionBack  = 'translateZ('+halfWidthNeg+'px) translateX(0px)                  rotateY(180deg)';

blockLeft.style.transform  = PositionLeft;
blockFront.style.transform = PositionFront;
blockRight.style.transform = PositionRight;
blockBack.style.transform  = PositionBack;

var leftClick = 4000;
console.log(leftClick%4);
liRight.addEventListener("click", function(){
  leftClick -= 1;
  console.log(leftClick%4);
  if (leftClick%4 == 1) {
    blockLeft.style.transform  = PositionFront;
    blockFront.style.transform = PositionRight;
    blockRight.style.transform = PositionBack;
    blockBack.style.transform  = PositionLeft;
  } else if (leftClick%4 == 2) {
    blockLeft.style.transform  = PositionRight;
    blockFront.style.transform = PositionBack;
    blockRight.style.transform = PositionLeft;
    blockBack.style.transform  = PositionFront;
  } else if (leftClick%4 == 3) {
    blockLeft.style.transform  = PositionBack;
    blockFront.style.transform = PositionLeft;
    blockRight.style.transform = PositionFront;
    blockBack.style.transform  = PositionRight;
  } else { // leftClick%a == 0
    blockLeft.style.transform  = PositionLeft;
    blockFront.style.transform = PositionFront;
    blockRight.style.transform = PositionRight;
    blockBack.style.transform  = PositionBack;
  }
});

liLeft.addEventListener("click", function(){
  leftClick += 1;
  console.log(leftClick%4);
  if (leftClick%4 == 1) {
    blockLeft.style.transform  = PositionFront;
    blockFront.style.transform = PositionRight;
    blockRight.style.transform = PositionBack;
    blockBack.style.transform  = PositionLeft;
  } else if (leftClick%4 == 2) {
    blockLeft.style.transform  = PositionRight;
    blockFront.style.transform = PositionBack;
    blockRight.style.transform = PositionLeft;
    blockBack.style.transform  = PositionFront;
  } else if (leftClick%4 == 3) {
    blockLeft.style.transform  = PositionBack;
    blockFront.style.transform = PositionLeft;
    blockRight.style.transform = PositionFront;
    blockBack.style.transform  = PositionRight;
  } else { // leftClick%a == 0
    blockLeft.style.transform  = PositionLeft;
    blockFront.style.transform = PositionFront;
    blockRight.style.transform = PositionRight;
    blockBack.style.transform  = PositionBack;
  }
});
