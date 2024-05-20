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