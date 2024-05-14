$('#button').click(function(){
    $('h1').hide();
    $('h1').fadeIn(1800);
});
$('#button2').click(function(){
    $('budy').fadeOut(1800);
});
$('#button3').click(function(){
    $('h1').slideUp(1800);
});
$('#button4').click(function(){
    $('h1').slideDown(1800);
});
$('#button5').click(function(){
    $('#button5').animate({width: "300px", fontsize: "150%"}, 2800);
    $('#button5').animate({width: "150px", fontsize: "50%"},3800);
});