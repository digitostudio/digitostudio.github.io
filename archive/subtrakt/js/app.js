$(document).ready(function() {
  // $(".hero").bind("load", function (){
  //   $(this).fadeIn("slow");
  // });
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 30) {
        $(".navbar").addClass("scrolling");
    } else {
        $(".navbar").removeClass("scrolling");
    }
});