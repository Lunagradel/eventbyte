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