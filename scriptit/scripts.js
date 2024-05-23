//Game over funktio tässä
$(document).ready(function(){
    $("#Button2").click(function(){
      $("#box2").fadeOut();
      $("#bye").fadeIn(3000);
      var audio = document.getElementById('audio');
      audio.volume = 0.03;
        audio.play();
    });
  });
//Menu osion napit
$(document).ready(function() {
    $("#Button1").click(function() {
        $("body").fadeOut(500, function() {
            window.location.href = "menu.html";
          });
        });
    });
    $(document).ready(function() {
      $("#MenuButton1").click(function() {
          $("body").fadeOut(500, function() {
              window.location.href = "LureSelector.html";
          });
      });
  
      $("#MenuButton2").click(function() {
          $("body").fadeOut(500, function() {
              window.location.href = "LureLibrary.html";
          });
      });
  
      $("#MenuButton3").click(function() {
          $("body").fadeOut(500, function() {
              window.location.href = "Weather.html";
          });
      });
  
      

      $("#LureReturn").click(function() {
        $("body").fadeOut(500, function() {
            window.location.href = "menu.html";
        });
    });
  });
  
  $(function() {
    $('body').hide().fadeIn('slow');
    
    });
    //Hyvästi nappula missä on audio liitetty mukana
    $(document).ready(function(){
        $("#MenuButton4").click(function(){
          $("#box2").fadeOut();
          $("#FareWell").fadeIn(3000);
          var audio = document.getElementById('audio');
            audio.volume = 0.01;
            audio.play();
            
    });
  });