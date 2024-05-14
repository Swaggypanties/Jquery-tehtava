$(document).ready(function(){
    $("#Button2").click(function(){
      $("#box2").fadeOut();
      $("#bye").fadeIn(3000);
      var audio = document.getElementById('audio');
        audio.play();
    });
  });

  