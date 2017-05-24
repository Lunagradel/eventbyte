
var isEditPage = document.getElementById("editEvent"),
    eventToEdit = localStorage.getItem("eventEdit"),
    spinner = '<i class="fa fa-spinner" aria-hidden="true"></i>',
    editBtn = $("#editEventFinalBtn");

if (isEditPage){
    inputEditInfo();
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

editBtn.click(

    function () {
        console.log("X");
        localStorage.setItem("loggedIn", "true");
        editBtn.html(spinner);
        setTimeout(function () {
            $(".fa-spinner").toggleClass("down");
            setTimeout(function () {
                editBtn.html("Event Edited").css("background-color", "#09765B");
                localStorage.setItem("editedEvent", 1);
                setTimeout(function () {
                    window.location.href = "?id=events"
                }, 1000)
            }, 1500)
        }, 1);
    }
);