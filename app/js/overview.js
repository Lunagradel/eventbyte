
$("#overview-grid, #overview-list").click(function () {
    $("#overview-grid, #overview-list").toggleClass("active");
    $(".overview-content").toggleClass("list grid");
});


$( document ).ready( function () {
    var destination = "overview";
    getEvents(destination);

});

function getEvents(destination) {

    if(destination === "overview"){
        $(".overview-content").empty();
        $.getJSON( "db/events.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {

                var finalEvent = eventTemplate.replace("{{event-title}}", val.title);
                finalEvent = finalEvent.replace("{{event-id}}", val.id);
                finalEvent = finalEvent.replace("{{event-date}}", val.date);
                finalEvent = finalEvent.replace("{{event-location}}", val.address);
                $(".overview-content").append(finalEvent);

            })
        })
    }else{
        $.getJSON( "db/events.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {
                if (destination == val.id){
                    console.log(val.title);
                }
            })
        })
    }
}

var eventTemplate = "<div data-id='{{event-id}}' class='event-item'>\
                    <h3>{{event-title}}</h3>\
                    <div>\
                        <span class='event-item_date'>{{event-date}}</span>\
                        <span class='event-item_location'>{{event-location}}</span>\
                    </div>\
                </div>";


$('body').on('click', 'div.event-item', function() {
    var eventId = $(this).attr("data-id");
    console.log(eventId);
    getEvents(eventId);
});
