var activeInterval;

$(document).on("click", "#openNav", function(){

  if ($(".menu-points").height() == 250) {
    $(".side-nav").css("width","90%");
  } else {
    $(".side-nav").css("width","60%");
  }

  $("body").css("overflow", "hidden");
  $(".menu-point").fadeIn();
  activeInterval = setInterval ('cursorActiveAnimation()', 800);
});

$(document).on("click", "#closeNav", function() {
  $(".side-nav").css("width","0");
  $("body").css("overflow", "auto");
  $(".menu-point").hide();
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

    $(".sponsor-thx").css("visibility", "visible");
    $(".input-container").slideUp(500);
    $(this).hide();

});


$(document).on("click", "#signUpBtn", function(){

    $(".sign-up").slideUp(500, function(){
      $(".sign-up-thx").fadeIn();
    });

});

$(document).on("click","#showSignUp", function(){
  $(".pop-sign-up").toggleClass("hidden");
});
