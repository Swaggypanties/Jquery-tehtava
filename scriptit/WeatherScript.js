$(document).ready(function() {
$("#LureReturn").click(function() {
    $("body").fadeOut(500, function() {
        window.location.href = "menu.html";
    });
});
});