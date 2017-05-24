
// $( document ).ready( function() {
//     $(".canvas").hide();
// });
$('body').on('click', 'div.event-item', function() {
    var id = $(this).attr("data-id");
    showCanvas(id);
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


function showCanvas(id) {
    getEvents(id);
    $(".canvas").slideDown(200).css("display","inline-flex");
}


// $('body').on('click', 'div.event-item', function() {
//     var eventId = $(this).attr("data-id");
//     console.log(eventId);
//     getEvents(eventId);
// });
