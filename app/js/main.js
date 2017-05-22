var activeInterval;

$(document).on("click", "#openNav", function(){
  $(".side-nav").css("width","60%");
  $("body").css("overflow", "hidden");
  $(".menu-point").css("opacity", "1");
  activeInterval = setInterval ('cursorActiveAnimation()', 800);
});

$(document).on("click", "#closeNav", function() {
  $(".side-nav").css("width","0");
  $("body").css("overflow", "auto");
  $(".menu-point").css("opacity", "0");
  clearInterval(activeInterval);
});

function cursorActiveAnimation() {
    $('.active-span').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


$(".sponsor-apply-btn").click(function () {

    // $(".input-container").find("input").fadeOut(200);
    // $(".input-container").prepend("<span class='sponsor-thx'>Thank you for your interest. You'll hear from us soon.<span>");
    $(".sponsor-thx").css("visibility", "visible");
    $(".input-container").slideUp(500);
    $(this).hide();

})