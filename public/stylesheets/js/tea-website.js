var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-3.2.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopButton").style.display = "block";
    } else {
        document.getElementById("backToTopButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $(".op-send-button").click(function(){
        $(".op-messege-area").toggle();
    });
    $(".close-button").click(function(){
        $(".op-messege-area").hide();
    });
});