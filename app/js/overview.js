
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
        // $(".overview-content").empty();
        $.getJSON( "db/events.json", function( data ) {
            var items = [];
            $.each( data, function( key, val ) {

                var finalEvent = eventTemplate.replace("{{event-title}}", val.title);
                finalEvent = finalEvent.replace("{{img-url}}", val.imgUrl);
                finalEvent = finalEvent.replace("{{event-id}}", val.id);
                finalEvent = finalEvent.replace("{{event-date}}", val.date);
                finalEvent = finalEvent.replace("{{event-location}}", "'"+val.address+"'");
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
                    $(".pop-top").css("background", "linear-gradient(rgba(30, 195, 154, 0.5), rgba(30, 195, 154, 0.5)), center center no-repeat url("+val.imgUrl+")");
                    $(".pop-top").css("background-size", "cover");
                    $.each(val.tags, function (key, tag) {
                        var tagMarkUp = '<p class="tag">'+tag+'</p>';
                        $(".tags").append(tagMarkUp);
                    });
                    // var mapUrl = $("#googleMap").attr("src").toString();
                    // // var mapUrl = 'http://maps.google.com/maps?q='+val.geoLocation[0]+','+val.geoLocation[1]+'&hl=es;z=14&amp;output=embed';
                    // var newMapUrl = mapUrl.replace("'+YOUR_LAT+'", val.geoLocation[0]);
                    // newMapUrl = newMapUrl.replace("'+YOUR_LON+'", val.geoLocation[1]);
                    // document.getElementById("googleMap").src = newMapUrl;
                }
            })
        })
    }
    AddNewEvent();
}

var eventTemplate = "<div data-id='{{event-id}}' class='event-item' style='background:linear-gradient(rgba(30, 195, 154, 0.5), rgba(30, 195, 154, 0.5)), center center no-repeat url({{img-url}}); background-size: cover'>\
                    <h3>{{event-title}}</h3>\
                    <div>\
                        <span class='event-item_date'>{{event-date}}</span>\
                        <span class='event-item_location'>{{event-location}}</span>\
                    </div>\
                    <div class='event-item_admin'>\
                        <span class='event-item_edit'>Edit</span>\
                        <span class='event-item_delete'>Delete</span>\
                    </div>\
                </div>";



// $(".overview-content.grid").hover(function () {
//
// }, function () {
//
// });

$(".overview-content").on({
    mouseenter: function () {
        if($(".overview-content").hasClass("grid"))
        {
            // $(this).animate({ backgroundSize: '200%' }, 500);
        }

    },
    mouseleave:function () {
        if($(".overview-content").hasClass("grid"))
        {
            // $(this).css("background-size", "100%");
            // console.log("y");
        }
    }
},'.event-item');

function AddNewEvent() {
    if (createdEvent == 1){
        console.log(createdEvent);
        localStorage.setItem("createdEvent", 0);
        setTimeout(function () {
            $(newEventEl).show('slide', {direction: 'left'}, 500);
        }, 500);
    }
}
