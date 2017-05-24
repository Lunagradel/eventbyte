

$(document).on("click", "#createSponsorBtn", function(){
  $(".create-sponsor").css("display","flex");
  $(".create-user, .create-event").hide();
  $(this).toggleClass("active-btn")
  $("#createEventBtn, #createUserBtn").removeClass("active-btn")
});

$(document).on("click", "#createUserBtn", function(){
  $(".create-user").css("display","flex");
  $(".create-sponsor, .create-event").hide();
  $(this).toggleClass("active-btn")
  $("#createEventBtn, #createSponsorBtn").removeClass("active-btn")
});

$(document).on("click", "#createEventBtn", function(){
  $(".create-event").css("display","flex");
  $(".create-sponsor, .create-user").hide();
  $(this).toggleClass("active-btn")
  $("#createUserBtn, #createSponsorBtn").removeClass("active-btn")
});

$(document).on("click", "#createUserFinalBtn", function(){
  $(".succes-message").fadeIn().css("display","flex");
});
