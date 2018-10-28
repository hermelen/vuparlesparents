height = window.innerHeight;
divDirections = document.getElementsByClassName('direction');

for (divDirection of divDirections) {
  divDirection.style.top = height/2;
}

var mainFaces = document.getElementsByClassName('main-face');

$(document).ready(function(){

  $('div.direction').css("top", height/2);

  function widthFunction() {
    var mainCubeContainerWidth = window.innerWidth;
    translateZ = "translateZ("+(mainCubeContainerWidth/2)+"px)";
    $(".main-cube")
    .css({
      'width': mainCubeContainerWidth
    })
    $(".main-cube-container").css('width', mainCubeContainerWidth)
    $(".main-face").css("width", mainCubeContainerWidth)
    $(".secondary-face")
    .css({
      'width': mainCubeContainerWidth,
      'height': mainCubeContainerWidth
    })
    $(".main-front").css('transform', translateZ);
    $(".main-right").css('transform', "rotateY(90deg)"+ translateZ);
    $(".main-back").css('transform', "rotateY(180deg)"+ translateZ);
    $(".main-left").css('transform', "rotateY(-90deg)"+ translateZ);
    $(".main-top").css('transform', "rotateX(-90deg)"+ translateZ);
    $(".main-bottom").css('transform', "rotateX(90deg)"+ translateZ);
  }
  widthFunction();

  var deg = 0;
  var cssPos = 1000;
  $('#toLeft').on('click', function(){
    deg -=90;
    cssPos += 1;
  })
  $('#toRight').on('click', function(){
    deg +=90;
    cssPos -= 1;
    // console.log("----------------"+cssPos+"----------------");
  })

  $('.direction').on('click',function(){
    $(".main-cube").css("transform","rotateY("+deg+"deg)");
  })

  $('li.front').on('click',function(){
    cssPos = 1000;
    $(".main-cube").css("transform","rotateY(0)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    // $(".cursor_front").addClass("on-front");
    // $(".cursor_back").addClass("on-back");
    // $(".cursor_left").addClass("on-left");
    // $(".cursor_right").addClass("on-right");
  })

  $('li.right').on('click',function(){
    cssPos = 999;
    $(".main-cube").css("transform","rotateY(-90deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    // $(".cursor_front").addClass("on-left");
    // $(".cursor_back").addClass("on-right");
    // $(".cursor_left").addClass("on-back");
    // $(".cursor_right").addClass("on-front");
  })

  $('li.back').on('click',function(){
    cssPos = 1002;
    $(".main-cube").css("transform","rotateY(180deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    // $(".cursor_front").addClass("on-back");
    // $(".cursor_back").addClass("on-front");
    // $(".cursor_left").addClass("on-right");
    // $(".cursor_right").addClass("on-left");
  })

  $('li.left').on('click',function(){
    cssPos = 1001;
    $(".main-cube").css("transform","rotateY(90deg)");
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom");
    // $(".cursor_front").addClass("on-right");
    // $(".cursor_back").addClass("on-left");
    // $(".cursor_left").addClass("on-front");
    // $(".cursor_right").addClass("on-back");
  })

  $('li.top').on('click',function(e){
    $(".main-cube").css("transform","rotateX(90deg) translateZ(-221px)")
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom")
    // $(".cursor_front").addClass("on-bottom")
    // $(".cursor_back").addClass("on-top")
    // $(".cursor_left").addClass("on-left")
    // $(".cursor_right").addClass("on-right")
    // $(".cursor_top").addClass("on-front")
    // $(".cursor_bottom").addClass("on-back")
  })

  $('li.bottom').on('click',function(e){
    $(".main-cube").css("transform","rotateX(-90deg) translateZ(221px)")
    $(".main-face").removeClass("on-front on-back on-left on-right on-top on-bottom")
    // $(".cursor_front").addClass("on-top")
    // $(".cursor_back").addClass("on-bottom")
    // $(".cursor_left").addClass("on-left")
    // $(".cursor_right").addClass("on-right")
    // $(".cursor_top").addClass("on-back")
    // $(".cursor_bottom").addClass("on-front")
  })

  var faceHeight = 0;

  for (mainFace of mainFaces) {
    if (mainFace.clientHeight > faceHeight) {
      faceHeight = mainFace.clientHeight;
    }
  }

  $('.main-face').height(faceHeight);
});
