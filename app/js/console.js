
var captionLength = 0;
var caption = 'Initial text in markup';
var arrayOfCaption = ["node.js","react.js","agile","ux","animation","communication", "tech"];
var captionEl = $('#caption');
var captionElExists = document.getElementById("caption");



$(document).ready(function() {
    if(captionElExists){
        console.log("Went there");
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
