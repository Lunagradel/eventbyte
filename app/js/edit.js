
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