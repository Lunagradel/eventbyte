
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
                    $(".pop-name").text(val.title);
                    $(".pop-date").text(val.date);
                    $(".pop-time").text(val.time);
                    $(".pop-address").text(val.address);
                    $(".pop-req").text(val.requirement);
                    $(".pop-desc").text(val.description);
                    $(".tags").empty();
                    $.each(val.tags, function (key, tag) {
                        var tagMarkUp = '<p class="tag">'+tag+'</p>'
                        $(".tags").append(tagMarkUp);
                    })

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



