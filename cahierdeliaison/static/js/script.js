height = window.innerHeight;
divDirections = document.getElementsByClassName('direction');

for (divDirection of divDirections) {
  divDirection.style.top = height/2;
}

$('div.direction').css("top", height/2);

$(document).ready(function(){



  function widthFunction() {
    mainCubeContainerWidth = $(".main-cube-div").width()*0.3;
    translateZ = "translateZ("+mainCubeContainerWidth/2+"px)";
    $(".main-cube")
    .css("width", mainCubeContainerWidth)
    .css("height", mainCubeContainerWidth)
    $(".main-cube-container")
    .css("width", mainCubeContainerWidth)
    .css("height", mainCubeContainerWidth)
    .css("-webkit-perspective", mainCubeContainerWidth*2.33)
    $(".main-face")
    .css("width", mainCubeContainerWidth)
    .css("height", mainCubeContainerWidth)
    $(".main-front").css("transform", translateZ)
    $(".main-right").css("transform", "rotateY(90deg) " + translateZ)
    $(".main-back").css("transform", "rotateY(180deg) " + translateZ)
    $(".main-left").css("transform", "rotateY(-90deg) " + translateZ)
  }
  widthFunction();

  var cssPosition = [
    "on-front",
    "on-back",
    "on-left",
    "on-right"
  ]

  var deg = 0;
  var cssPos = 1000;
  $('#toLeft').on('click', function(){
    deg -=90;
    cssPos += 1;
  })
  $('#toRight').on('click', function(){
    deg +=90;
    cssPos -= 1;
    console.log("--------------------------------");
  })

  $('.direction').on('click',function(){
    $(".main-cube").css("transform","rotateY("+deg+"deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    $(".cursor_front").addClass(cssPosition[cssPos%4]);
    console.log(cssPos%4);
    $(".cursor_back").addClass(cssPosition[(cssPos+3)%4]);
    console.log((cssPos+1)%4);
    $(".cursor_left").addClass(cssPosition[(cssPos+1)%4]);
    console.log((cssPos+2)%4);
    $(".cursor_right").addClass(cssPosition[(cssPos+2)%4]);
    console.log((cssPos+3)%4);
  })

  $('li.front').on('click',function(){
    cssPos = 1000;
    $(".main-cube").css("transform","rotateY(0)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    $(".cursor_front").addClass("on-front");
    $(".cursor_back").addClass("on-back");
    $(".cursor_left").addClass("on-left");
    $(".cursor_right").addClass("on-right");
  })

  $('li.right').on('click',function(){
    cssPos = 999;
    $(".main-cube").css("transform","rotateY(-90deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    $(".cursor_front").addClass("on-left");
    $(".cursor_back").addClass("on-right");
    $(".cursor_left").addClass("on-back");
    $(".cursor_right").addClass("on-front");
  })

  $('li.back').on('click',function(){
    cssPos = 1002;
    $(".main-cube").css("transform","rotateY(180deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    $(".cursor_front").addClass("on-back");
    $(".cursor_back").addClass("on-front");
    $(".cursor_left").addClass("on-right");
    $(".cursor_right").addClass("on-left");
  })

  $('li.left').on('click',function(){
    cssPos = 1001;
    $(".main-cube").css("transform","rotateY(90deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    $(".cursor_front").addClass("on-right");
    $(".cursor_back").addClass("on-left");
    $(".cursor_left").addClass("on-front");
    $(".cursor_right").addClass("on-back");
  })
});
