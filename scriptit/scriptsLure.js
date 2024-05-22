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


        //Water clarity
        $("#WaterClr").append('<option value="Clear">Clear</option>');
        $("#WaterClr").append('<option value="Cloudy">Cloudy</option>');
        $("#WaterClr").append('<option value="Murky">Murky</option>');

        //Water depth
        $("#WaterDpth").append('<option value="Shallow">Shallow 1-5m</option>');
        $("#WaterDpth").append('<option value="MidDpth">Mid-depth 6-12m</option>');
        $("#WaterDpth").append('<option value="Deep">Deep 13-23m</option>');
        $("#WaterDpth").append('<option value="UltraDeep">Ultra Deep 24m->...</option>');
    });
    function lisaa(event) {
        event.preventDefault();
        
        var sunny = $("#Sunny").val();
        var rain = $("#Rain").val();
        var temp = $("#Temp").val();
        var waterclr = $("#WaterClr").val();
        var waterdpth = $("#WaterDpth").val();
        
        var params = $.param({
            Sunny: sunny,
            Rain: rain,
            Temp: temp,
            WaterClr: waterclr,
            WaterDpth: waterdpth
        });
        $("body").fadeOut(1000, function() { 
        window.location.href = 'LureSelected.html?' + params;
    });

    return false;

    }
    $(function() {
        $('body').hide().fadeIn('slow');
        
        });
    
        $(document).ready(function() {
            // Function to get URL parameters
            function getUrlParams() {
                var params = {};
                var parser = document.createElement('a');
                parser.href = window.location.href;
                var query = parser.search.substring(1);
                var vars = query.split('&');
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split('=');
                    params[pair[0]] = decodeURIComponent(pair[1]);
                }
                return params;
            }
    
            var params = getUrlParams();
            var result = '';
            var imgResult = '';
    
            // Here is all the green variables
            if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Green';
                imgResult = 'LureImg/green.jpg';
            }//Here is all the blue variables
             else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            } else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'UltraDeep') {
                result = 'Blue';
                imgResult = 'LureImg/blue.jpg';
            }
            //Here is all the black variables
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'Deep') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Murky' && params.WaterDpth === 'MidDpth') {
                result = 'Black';
                imgResult = 'LureImg/black.jpg';
            }
            //Here is all the purple variables
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Purple';
                imgResult = 'LureImg/purple.jpg';
                
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Purple';
                imgResult = 'LureImg/purple.jpg';
                
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Purple';
                imgResult = 'LureImg/purple.jpg';
                
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Cold' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Purple';
                imgResult = 'LureImg/purple.jpg';
                
            }
            //Here is all the pink variables
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'MidDpth') {
                result = 'Pink';
                imgResult = 'LureImg/pink.jpg';
            }
            //Here is all the red variables
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'Shallow') {
                result = 'Red';
                imgResult = 'LureImg/red.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'Shallow') {
                result = 'Red';
                imgResult = 'LureImg/red.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'Shallow') {
                result = 'Red';
                imgResult = 'LureImg/red.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Clear' && params.WaterDpth === 'Shallow') {
                result = 'Red';
                imgResult = 'LureImg/red.jpg';
            }
            //Here is all the chartreuse variables
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Chartreuse';
                imgResult = 'LureImg/charr.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'Deep') {
                result = 'Chartreuse';
                imgResult = 'LureImg/charr.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Chartreuse';
                imgResult = 'LureImg/charr.jpg';
            }
            else if (params.Sunny === 'Sunny' && params.Rain === 'Yes' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Chartreuse';
                imgResult = 'LureImg/charr.jpg';
            }//Here is the greens
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Warm' && params.WaterClr === 'Cloudy' && params.WaterDpth === 'Deep') {
                result = 'Green';
                imgResult = 'LureImg/green.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'No' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'Deep') {
                result = 'Green';
                imgResult = 'LureImg/green.jpg';
            }
            else if (params.Sunny === 'Cloudy' && params.Rain === 'Yes' && params.Temp === 'Hot' && params.WaterClr === 'Clear' && params.WaterDpth === 'Deep') {
                result = 'Green';
                imgResult = 'LureImg/green.jpg';
            }
            
            else {
                result = 'No matching result found.';
            }
    
            // Display the result
            $("#result").text(result);

            if (imgResult) {
                $("#resultImage").attr("src", imgResult).show();
            }

        });
    