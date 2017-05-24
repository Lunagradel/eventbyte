var lgnBtn = $(".login-btn"),
    spinner = '<i class="fa fa-spinner" aria-hidden="true"></i>',
    btnDelete = document.getElementsByClassName("event-item_delete"),
    btnEdit = document.getElementsByClassName("event-item_edit");


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

$(document).on("click","#logOutBtn", function(){
    if (localStorage){
      localStorage.removeItem("loggedIn");
      window.location.href = "?id=frontpage"
    }

});
