$(document).ready(function() {
    $("#LureReturn").click(function() {
        $("#MenuBudy").fadeOut(500, function() {
            window.location.href = "menu.html";
          });
        });
    });
    $(document).ready(function() {
        // Populate the "Sunny" select element
        $("#Sunny").append('<option value="Sunny">Sunny</option>');
        $("#Sunny").append('<option value="Cloudy">Cloudy</option>');

        // Populate the "Rain" select element
        $("#Rain").append('<option value="Yes">Yes</option>');
        $("#Rain").append('<option value="No">No</option>');

        // Populate the "Temp" select element
        $("#Temp").append('<option value="Cold">Cold 5...(-5)</option>');
        $("#Temp").append('<option value="Warm">Warm 6...15</option>');
        $("#Temp").append('<option value="Hot">Hot 16...25</option>');

        // Populate the "AirPress" select element
        $("#AirPress").append('<option value="High">High</option>');
        $("#AirPress").append('<option value="Low">Low</option>');
    });
    function lisaa(event) {
        event.preventDefault();
        
        var sunny = $("#Sunny").val();
        var rain = $("#Rain").val();
        var temp = $("#Temp").val();
        var airPress = $("#AirPress").val();
        
        var params = $.param({
            Sunny: sunny,
            Rain: rain,
            Temp: temp,
            AirPress: airPress
        });
        $("body").fadeOut(1000, function() { 
        window.location.href = 'LureSelected.html?' + params;
    });

    return false;

    }
    $(function() {
        $('body').hide().fadeIn('slow');
        
        });
    