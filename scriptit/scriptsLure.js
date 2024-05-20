$(document).ready(function() {
    $("#LureReturn").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "menu.html";
          });
        });
    });