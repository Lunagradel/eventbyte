

$('body').on('click', 'div.event-item', function(e) {

    var dataTypeId = $(e.target).parent().parent().attr("data-id"),
        adminParent = $(e.target).parent().parent();

    if (e.target.matches('.event-item_delete')) {

        $(adminParent).animate({
            borderTopColor: "white"
        }, 50);
        $(adminParent).hide('slide',{direction:'right'},500);

    }else if(e.target.matches('.event-item_edit')){

        localStorage.setItem("eventEdit", dataTypeId);
        setTimeout(function () {
            window.location.href = "?id=edit";
        }, 20);
        // console.log(localStorage.getItem("eventEdit"));

    }else {
        var id = $(this).attr("data-id");
        showCanvas(id);
    }

});

$(".canvas").click( function(e) {
    if (e.target == this) {
        $(this).children(":first").animate({
            top: "100%"
        }, 100, "swing", function () {
            $(this).parent().hide();
        });
    }
});

$(document).on("click", "#closePop", function(){
  $(this).parent(":first").animate({
      top: "100%"
  }, 100, "swing", function () {
      $(this).parent().hide();
  });
});


function showCanvas(id) {
    getEvents(id);
    setTimeout(function () {
        $(".canvas").slideDown(200).css("display","inline-flex");
    },200);

}

var editedEvent = localStorage.getItem("editedEvent"),
    eventToEdit = localStorage.getItem("eventEdit"),
    createdEvent = localStorage.getItem("createdEvent"),
    newEventEl = $("#newPhoneyEl");

if (editedEvent == 1 ){
    localStorage.setItem("editedEvent", 0);
    showCanvas(eventToEdit);
}

