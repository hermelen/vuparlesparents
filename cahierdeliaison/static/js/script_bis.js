var width = window.innerWidth;

var cuboid = document.getElementById("cuboid");
var blockLeft = document.getElementById("cuboidLeft");
var blockFront = document.getElementById("cuboidFront");
var blockRight = document.getElementById("cuboidRight");
var blockBack = document.getElementById("cuboidBack");
var translate = width/2;

var positionLeft  = "translateX("+(-width)+"px)";
var positionFront = "translateX(0px)";
var positionRight = "translateX("+(width)+"px)";
var positionBack  = "translateX("+(width*2)+"px)";

blockLeft.style.transform = positionLeft;
blockLeft.style.zIndex = -1;
blockFront.style.transform = positionFront;
blockFront.style.zIndex = 1;
blockRight.style.transform = positionRight;
blockRight.style.zIndex = -1;
blockBack.style.transform = positionBack;
blockBack.style.zIndex = -1;

var liLeft = document.getElementById("toLeft");
var liRight = document.getElementById("toRight");
console.log(liRight);

var leftClick = 4000;
liLeft.addEventListener("click", function(){
  leftClick += 1;
  console.log(leftClick%4);
  if (leftClick%4 == 1) {
    blockLeft.style.transform = positionFront;
    blockLeft.style.zIndex = 1;
    blockFront.style.transform = positionRight;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionBack;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionLeft;
    blockBack.style.zIndex = -1;
  } else if (leftClick%4 == 2) {
    blockLeft.style.transform = positionRight;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionBack;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionLeft;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionFront;
    blockBack.style.zIndex = 1;
  } else if (leftClick%4 == 3) {
    blockLeft.style.transform = positionBack;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionLeft;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionFront;
    blockRight.style.zIndex = 1;
    blockBack.style.transform = positionRight;
    blockBack.style.zIndex = -1;
  } else { // leftClick%a == 0
    blockLeft.style.transform = positionLeft;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionFront;
    blockFront.style.zIndex = 1;
    blockRight.style.transform = positionRight;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionBack;
    blockBack.style.zIndex = -1;
  }
});

liRight.addEventListener("click", function(){
  leftClick -= 1;
  console.log(leftClick%4);
  if (leftClick%4 == 1) {
    blockLeft.style.transform = positionFront;
    blockLeft.style.zIndex = 1;
    blockFront.style.transform = positionRight;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionBack;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionLeft;
    blockBack.style.zIndex = -1;
  } else if (leftClick%4 == 2) {
    blockLeft.style.transform = positionRight;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionBack;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionLeft;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionFront;
    blockBack.style.zIndex = 1;
  } else if (leftClick%4 == 3) {
    blockLeft.style.transform = positionBack;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionLeft;
    blockFront.style.zIndex = -1;
    blockRight.style.transform = positionFront;
    blockRight.style.zIndex = 1;
    blockBack.style.transform = positionRight;
    blockBack.style.zIndex = -1;
  } else { // leftClick%a == 0
    blockLeft.style.transform = positionLeft;
    blockLeft.style.zIndex = -1;
    blockFront.style.transform = positionFront;
    blockFront.style.zIndex = 1;
    blockRight.style.transform = positionRight;
    blockRight.style.zIndex = -1;
    blockBack.style.transform = positionBack;
    blockBack.style.zIndex = -1;
  }
});


// $(document).ready(function(){
//   // initialisation
//   width = $(window).width();
//   $(".cuboid section").width(width);
//   var rotateY = 0;
//   var translate = 0;
//   var translate = width/2;
//
//   $("section.left").css("transform", "rotateY("+ rotateY -90 +"deg) translate3d("+ translate +"px, 0px, "+ -translate +"px)");
//   $("section.front").css("transform", "rotateY("+ rotateY +"deg) translate3d("+ translate +"px+, 0px, "+ translate +"px)");
//
//   $("li.left").click(function(){
//     rotateY += 90;
//     $("section.left").css("transform", "rotateY("+ (rotateY-90) +"deg) translate3d("+ translate +"px, 0px, "+ -translate +"px)");
//     $("section.front").css("transform", "rotateY("+ rotateY +"deg) translate3d("+ translate +"px, 0px, "+ translate +"px)");
//   })
// })
