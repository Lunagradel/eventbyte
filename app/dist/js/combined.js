function cursorActiveAnimation(){$(".active-span").animate({opacity:0},"fast","swing").animate({opacity:1},"fast","swing")}function getEvents(e){"overview"===e?$.getJSON("db/events.json",function(e){$.each(e,function(e,t){var n=eventTemplate.replace("{{event-title}}",t.title);n=(n=(n=(n=n.replace("{{img-url}}",t.imgUrl)).replace("{{event-id}}",t.id)).replace("{{event-date}}",t.date)).replace("{{event-location}}","'"+t.address+"'"),$(".overview-content").append(n)})}):$.getJSON("db/events.json",function(t){$.each(t,function(t,n){e==n.id&&($(".pop-name").text(n.title),$(".pop-date").text(n.date),$(".pop-time").text(n.time),$(".pop-address").text(n.address),$(".pop-req").text(n.requirement),$(".pop-desc").text(n.description),$(".tags").empty(),$(".pop-top").css("background","linear-gradient(rgba(30, 195, 154, 0.5), rgba(30, 195, 154, 0.5)), center center no-repeat url("+n.imgUrl+")"),$(".pop-top").css("background-size","cover"),$.each(n.tags,function(e,t){var n='<p class="tag">'+t+"</p>";$(".tags").append(n)}))})}),AddNewEvent(),localStorage.loggedIn||$(".overview-content").addClass("not-logged-in")}function AddNewEvent(){1==createdEvent&&(console.log(createdEvent),localStorage.setItem("createdEvent",0),setTimeout(function(){$(newEventEl).show("slide",{direction:"left"},500)},500))}function showCanvas(e){getEvents(e),setTimeout(function(){$(".canvas").slideDown(200).css("display","inline-flex")},200)}function inputEditInfo(){$.getJSON("db/events.json",function(e){$.each(e,function(e,t){eventToEdit==t.id&&($("#editTitle").val(t.title),$("#editDate").val(t.date),$("#editTime").val(t.time),$("#editAdd").val(t.address),$("#editDesc").val(t.description),$("#editReq").val(t.requirement),$("#editTag").val(t.tags))})})}function inputSponsorInfo(){$("#editTitle").val("Skynet"),$("#editAdd").val("USA! USA!"),$("#editDesc").val("Skynet is a neural net-based conscious group mind and artificial general intelligence system")}function arrayLoop(){setTimeout(function(){i>=arrayOfCaption.length-1?(captionEl.html(arrayOfCaption[i].toString()),console.log("Ending loop with: "+arrayOfCaption[i])):(console.log("Going ahead with loop"),testErasingEffect(),testTypingEffect(arrayOfCaption[i]),++i<arrayOfCaption.length&&arrayLoop())},1500)}function testTypingEffect(e){caption=e,type()}function type(){captionEl.html(caption.substr(0,captionLength++)),captionLength<caption.length+1?setTimeout("type()",50):(console.log("Stopped typing"),captionLength=0,caption="")}function testErasingEffect(){caption=captionEl.html(),(captionLength=caption.length)>0?erase():($("#caption").html("You didn't write anything to erase, but that's ok!"),setTimeout("testErasingEffect()",1e3))}function erase(){captionEl.html(caption.substr(0,captionLength--)),captionLength>=0?setTimeout("erase()",50):(captionLength=0,caption="")}function cursorAnimation(){$("#cursor").animate({opacity:0},"fast","swing").animate({opacity:1},"fast","swing")}var activeInterval;$(document).on("click","#openNav",function(){250==$(".menu-points").height()?$(".side-nav").css("width","90%"):$(".side-nav").css("width","60%"),$("body").css("overflow","hidden"),$(".menu-point").fadeIn(),activeInterval=setInterval("cursorActiveAnimation()",800)}),$(document).on("click","#closeNav",function(){$(".side-nav").css("width","0"),$("body").css("overflow","auto"),$(".menu-point").hide(),clearInterval(activeInterval)}),$(".sponsor-apply-btn").click(function(){$(".sponsor-thx").css("visibility","visible"),$(".input-container").slideUp(500),$(this).hide()}),$(document).on("click","#signUpBtn",function(){$(".sign-up").slideUp(500,function(){$(".sign-up-thx").fadeIn()})}),$(document).on("click","#showSignUp",function(){$(".pop-sign-up").toggleClass("hidden")}),$(document).ready(function(){"true"==localStorage.loggedIn&&(console.log("waht"),$("#adminMenu").show(),$("#notAdminMenu").hide()),localStorage.loggedIn||($("#adminMenu").hide(),$("#notAdminMenu").show())}),$("#overview-grid, #overview-list").click(function(){$("#overview-grid, #overview-list").toggleClass("active"),$(".overview-content").toggleClass("list grid")}),$(document).ready(function(){if(localStorage.loggedIn||$(".overview-content").addClass("not-logged-in"),isSponsorSite=$(".overview-content").hasClass("sponsors"),!isSponsorSite){getEvents("overview")}"true"==localStorage.loggedIn&&(console.log("is"),$(".event-item_admin").show())});var eventTemplate="<div data-id='{{event-id}}' class='event-item' style='background:linear-gradient(rgba(30, 195, 154, 0.5), rgba(30, 195, 154, 0.5)), center center no-repeat url({{img-url}}); background-size: cover'>                    <h3>{{event-title}}</h3>                    <div>                        <span class='event-item_date'>{{event-date}}</span>                        <span class='event-item_location'>{{event-location}}</span>                    </div>                    <div class='event-item_admin'>                        <span class='event-item_edit'>Edit</span>                        <span class='event-item_delete'>Delete</span>                    </div>                </div>";$(".overview-content").on({mouseenter:function(){$(".overview-content").hasClass("grid")},mouseleave:function(){$(".overview-content").hasClass("grid")}},".event-item"),$("body").on("click","div.event-item",function(e){var t=$(e.target).parent().parent().attr("data-id"),n=$(e.target).parent().parent();e.target.matches(".event-item_delete")?($(n).animate({borderTopColor:"white"},50),$(n).hide("slide",{direction:"right"},500)):e.target.matches(".event-item_edit")?(localStorage.setItem("eventEdit",t),setTimeout(function(){window.location.href="?id=edit"},20)):showCanvas($(this).attr("data-id"))}),$(".canvas").click(function(e){e.target==this&&$(this).children(":first").animate({top:"100%"},100,"swing",function(){$(this).parent().hide()})}),$(document).on("click","#closePop",function(){$(this).parent(":first").animate({top:"100%"},100,"swing",function(){$(this).parent().hide()})});var editedEvent=localStorage.getItem("editedEvent"),eventToEdit=localStorage.getItem("eventEdit"),createdEvent=localStorage.getItem("createdEvent"),newEventEl=$("#newPhoneyEl");1==editedEvent&&(localStorage.setItem("editedEvent",0),showCanvas(eventToEdit)),$(document).on("click","#createSponsorBtn",function(){$(".create-sponsor").css("display","flex"),$(".create-user, .create-event").hide(),$(this).toggleClass("active-btn"),$("#createEventBtn, #createUserBtn").removeClass("active-btn")}),$(document).on("click","#createUserBtn",function(){$(".create-user").css("display","flex"),$(".create-sponsor, .create-event").hide(),$(this).toggleClass("active-btn"),$("#createEventBtn, #createSponsorBtn").removeClass("active-btn")}),$(document).on("click","#createEventBtn",function(){$(".create-event").css("display","flex"),$(".create-sponsor, .create-user").hide(),$(this).toggleClass("active-btn"),$("#createUserBtn, #createSponsorBtn").removeClass("active-btn")}),$(document).on("click","#createUserFinalBtn",function(){$(".succes-message").fadeIn().css("display","flex")});var lgnBtn=$(".login-btn"),spinner='<i class="fa fa-spinner" aria-hidden="true"></i>',crtBtn=$("#createEventFinalBtn");lgnBtn.click(function(){localStorage.setItem("loggedIn","true"),lgnBtn.html(spinner),setTimeout(function(){$(".fa-spinner").toggleClass("down"),setTimeout(function(){lgnBtn.html("Login successful").css("background-color","#09765B"),setTimeout(function(){window.location.href="?id=events"},500)},1500)},1)}),crtBtn.click(function(){crtBtn.html(spinner),setTimeout(function(){$(".fa-spinner").toggleClass("down"),setTimeout(function(){crtBtn.html("Event Created!").css("background-color","#09765B"),localStorage.setItem("createdEvent",1),setTimeout(function(){window.location.href="?id=events"},1e3)},1500)},1)}),$(document).on("click","#logOutBtn",function(){localStorage&&(localStorage.removeItem("loggedIn"),window.location.href="?id=frontpage")});var isEditPage=document.getElementById("editEvent"),isEditSponsor=document.getElementById("editSponsor"),eventToEdit=localStorage.getItem("eventEdit"),spinner='<i class="fa fa-spinner" aria-hidden="true"></i>',editBtn=$("#editEventFinalBtn");isEditPage?(console.log("Shit"),inputEditInfo()):isEditSponsor&&inputSponsorInfo(),editBtn.click(function(){editBtn.html(spinner),setTimeout(function(){$(".fa-spinner").toggleClass("down"),setTimeout(function(){isEditSponsor?(editBtn.html("Sponsor Edited").css("background-color","#09765B"),setTimeout(function(){window.location.href="?id=sponsor-list"},1e3)):(editBtn.html("Event Edited").css("background-color","#09765B"),localStorage.setItem("editedEvent",1),setTimeout(function(){window.location.href="?id=events"},1e3))},1500)},10)});var captionLength=0,caption="Initial text in markup",arrayOfCaption=["node.js","react.js","agile","ux","animation","communication","tech"],captionEl=$("#caption"),captionElExists=document.getElementById("caption");$(document).ready(function(){captionElExists&&(console.log("Went there"),setInterval("cursorAnimation()",600),arrayLoop())});var i=0;