$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
      $(".navbar").css("background", "#333");
      $("a").css("color", "#333");
    } else {
      $("a").css("color", "blue");
      $(".navbar").css("background", "");
    }
  });
});
