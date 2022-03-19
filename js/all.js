$(document).ready(function () {

  $(window).scroll(function () {
    last=$("body").height()-$(window).height()-3500
    if($(window).scrollTop()>=last){
      $("#socialVdo")[0].play();
      $("#socialVdo2")[0].play();
    }
  })











});