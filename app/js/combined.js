
var captionLength = 0;
var caption = 'Initial text in markup';
var arrayOfCaption = ["node.js","react.js","agile","ux","animation","communication", "tech"];
var captionEl = $('#caption');
var captionElExists = document.getElementById("caption");



$(document).ready(function() {
    if(captionElExists){
        setInterval ('cursorAnimation()', 600);
        arrayLoop();
    }
});

var i = 0;

function arrayLoop () {
    setTimeout(function () {
        if (i >= (arrayOfCaption.length - 1) ){
            // testErasingEffect();
            captionEl.html(arrayOfCaption[i].toString());
            console.log("Ending loop with: "+arrayOfCaption[i]);
        }
        else
        {
            console.log("Going ahead with loop");
            testErasingEffect();
            testTypingEffect(arrayOfCaption[i]);
            i++;
            if (i < arrayOfCaption.length) {
                arrayLoop();
            }
        }
    }, 1500)
}

function testTypingEffect(newCaption) {
    caption = newCaption;
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if((captionLength < caption.length+1)) {

        setTimeout('type()', 50);
        // console.log("Typing. First param: "+captionLength+" Second param: "+(caption.length+1))

    } else {
        console.log("Stopped typing")
        captionLength = 0;
        caption = '';
    }
}

function testErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('testErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

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

$(document).ready(function(){
  if (localStorage.loggedIn == "true"){
    console.log("waht");
    $("#adminMenu").show();
    $("#notAdminMenu").hide();
  }
  if (!localStorage.loggedIn) {
    $("#adminMenu").hide();
    $("#notAdminMenu").show();
  }
});


$("#overview-grid, #overview-list").click(function () {
    $("#overview-grid, #overview-list").toggleClass("active");
    $(".overview-content").toggleClass("list grid");
});


$( document ).ready( function () {

    if (!localStorage.loggedIn) {
        $(".overview-content").addClass("not-logged-in");
    }

    isSponsorSite = $(".overview-content").hasClass("sponsors");
    if (!isSponsorSite){
        var destination = "overview";
        getEvents(destination);
    }


    if (localStorage.loggedIn == "true"){
        console.log("is");
        $(".event-item_admin").show();
    }


});

function getEvents(destination) {

    if(destination === "overview"){
        // $(".overview-content").empty();
        $.getJSON( "db/events.json", function( data ) {
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
                }
            })
        })
    }
    AddNewEvent();
    if (!localStorage.loggedIn) {
        $(".overview-content").addClass("not-logged-in");
    }
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

var lgnBtn = $(".login-btn"),
    spinner = '<i class="fa fa-spinner" aria-hidden="true"></i>',
    crtBtn = $("#createEventFinalBtn");


lgnBtn.click(
    function () {
        localStorage.setItem("loggedIn", "true");
        lgnBtn.html(spinner);
        setTimeout(function () {
            $(".fa-spinner").toggleClass("down");
            setTimeout(function () {
                lgnBtn.html("Login successful").css("background-color", "#09765B")
                setTimeout(function () {
                    window.location.href = "?id=events"
                }, 500)
            }, 1500)
        }, 1);
    }
);

crtBtn.click(
    function () {
        crtBtn.html(spinner);
        setTimeout(function () {
            $(".fa-spinner").toggleClass("down");
            setTimeout(function () {
                crtBtn.html("Event Created!").css("background-color", "#09765B");
                localStorage.setItem("createdEvent", 1);
                setTimeout(function () {
                    window.location.href = "?id=events"
                }, 1000)
            }, 1500)
        }, 1);
    }
);

$(document).on("click","#logOutBtn", function(){
    if (localStorage){
      localStorage.removeItem("loggedIn");
      window.location.href = "?id=frontpage"
    }

});



var isEditPage = document.getElementById("editEvent"),
    isEditSponsor = document.getElementById("editSponsor"),
    eventToEdit = localStorage.getItem("eventEdit"),
    spinner = '<i class="fa fa-spinner" aria-hidden="true"></i>',
    editBtn = $("#editEventFinalBtn");

if (isEditPage){
    console.log("Shit");
    inputEditInfo();
}else if (isEditSponsor) {
    inputSponsorInfo();
}

function inputEditInfo () {
    $.getJSON( "db/events.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            if (eventToEdit == val.id)
            {
                $("#editTitle").val(val.title);
                $("#editDate").val(val.date);
                $("#editTime").val(val.time);
                $("#editAdd").val(val.address);
                $("#editDesc").val(val.description);
                $("#editReq").val(val.requirement);
                $("#editTag").val(val.tags);
            }
        })
    })
}

function inputSponsorInfo() {
    $("#editTitle").val("Skynet");
    $("#editAdd").val("USA! USA!");
    $("#editDesc").val("Skynet is a neural net-based conscious group mind and artificial general intelligence system");
}

editBtn.click(
    function () {
        editBtn.html(spinner);
        setTimeout(function () {
            $(".fa-spinner").toggleClass("down");
            setTimeout(function () {
                if (isEditSponsor){
                    editBtn.html("Sponsor Edited").css("background-color", "#09765B");
                    setTimeout(function () {
                        window.location.href = "?id=sponsor-list"
                    }, 1000)
                }else {
                    editBtn.html("Event Edited").css("background-color", "#09765B");
                    localStorage.setItem("editedEvent", 1);
                    setTimeout(function () {
                        window.location.href = "?id=events"
                    }, 1000)
                }

            }, 1500)
        }, 10);
    }
);