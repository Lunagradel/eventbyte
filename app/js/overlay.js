

$('body').on('click', 'div.event-item', function(e) {

    var dataTypeId = $(e.target).parent().parent().attr("data-id"),
        adminParent = $(e.target).parent().parent();

    if (e.target.matches('.event-item_delete')) {

        $(adminParent).animate({
            borderTopColor: "white"
        }, 50);
        $(adminParent).hide('slide',{direction:'right'},500);

    }else if(e.target.matches('.event-item_edit')){


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


function showCanvas(id) {
    getEvents(id);
    $(".canvas").slideDown(200).css("display","inline-flex");
}
