$(document).ready(function(){
    $("#Button2").click(function(){
      $("#box2").fadeOut();
      $("#bye").fadeIn(3000);
      var audio = document.getElementById('audio');
        audio.play();
    });
  });

$(document).ready(function() {
    $("#Button1").click(function() {
        $("#Budy").fadeOut(500, function() {
            window.location.href = "menu.html";
          });
        });
    });
$(document).ready(function() {
    $("#MenuButton1").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "LureSelector.html";
          });
        });
    });
$(document).ready(function() {
    $("#MenuButton2").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "LureLibrary.html";
          });
        });
    });
$(document).ready(function() {
    $("#MenuButton3").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "Weather.html";
          });
        });
    });
$(document).ready(function() {
    $("#MenuButton4").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "Farewell.html";
          });
        });
    });