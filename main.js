$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $("nav").css("background", "white");
      $("a").css("color", "black");
    } else {
      $("nav").css("background", "rgba(255, 255, 255, 0.678)");
      // $("a").css("color", "blue");
    }
  });
});
