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

  var navWidth = $('.top-menu').width();
  console.log(navWidth);

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
  })

  $('li.right').on('click',function(){
    cssPos = 999;
    $(".main-cube").css("transform","rotateY(-90deg)");
  })

  $('li.back').on('click',function(){
    cssPos = 1002;
    $(".main-cube").css("transform","rotateY(180deg)");
  })

  $('li.left').on('click',function(){
    cssPos = 1001;
    $(".main-cube").css("transform","rotateY(90deg)");
  })

  $('li.top').on('click',function(e){
    // $(".main-cube").css("transform","rotateX(90deg) translateZ(-218px)")
    $(".main-cube").css("transform","rotateX(90deg) translateZ("+(-navWidth/2)+"px)")
  })

  $('li.bottom').on('click',function(e){
    // $(".main-cube").css("transform","rotateX(-90deg) translateZ(218px)")
    $(".main-cube").css("transform","rotateX(-90deg) translateZ("+(navWidth/2)+"px)")
  })

  var faceHeight = 0;

  for (mainFace of mainFaces) {
    if (mainFace.clientHeight > faceHeight) {
      faceHeight = mainFace.clientHeight;
    }
  }

  $('.main-face').height(faceHeight);
});
