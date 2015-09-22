$(function() {
  var $targetWeatherIcon = $("#target-weather-icon");
  var $targetWeatherTemperature = $("#target-weather-temperature");
  var $targetWeatherLocation = $("#target-weather-location");
  var $targetUnit = $("#target-unit");
  var $targetIconDescription = $("#target-icon-description");
  var $tbar = $("#tbar");
  var $labelCurrent = $("#label-current");
  var $label32 = $("#label-32");
  var $label100 = $("#label-100");
  var $icon = $("<i></i>");
  var unit = "fahrenheit";
  var pl;

  function unitConvert() {
    // Formula. °C x 9/5 + 32 = °F. (°F - 32) x 5/9 = °C
  }

  function getWeather(geo) {
    var key = "15a02bb42b47c29857e744f8908b75c8";
    var url = "https://api.forecast.io/forecast/"+key+"/"+geo[0].lat+","+geo[0].lng;
    var city = geo[0].placeName;
    var state = geo[0].adminName1;

    $.ajax({
      url: url,
      dataType: 'jsonp',
      success: function(res) {
        $icon.prop("class", "");
        $icon.addClass("wi wi-forecast-io-" + res.currently.icon);

        // add icon to document
        $targetWeatherIcon.html($icon);

        // format icon description
        var arr = res.currently.icon.split('-');
        var desc = arr.map(function(el) {
          return el.charAt(0).toUpperCase() + el.substr(1);
        }).join(' ');

        // add icon description
        $targetIconDescription.text(desc);

        // update body background - so much un-DRY code!!
        if (desc.toLowerCase().indexOf("cloudy night") >= 0) {
          $("body").css({
            "background-image": "url('http://i.imgur.com/OWLJ5UO.jpg')"
          });
        } else if (desc.toLowerCase().indexOf("cloudy day") >= 0) {
          $("body").css({
            "background-image": "url('http://i.imgur.com/ZZGFsL3.jpg')"            
          });
        } else if (desc.toLowerCase().indexOf("rain") >= 0) {
          $("body").css({
            "background-image": "url('http://i.imgur.com/Tu55G2M.jpg')"
          });
        } else if (desc.toLowerCase().indexOf("snow") >= 0) {
          $("body").css({
            "background-image": "url('http://i.imgur.com/83UqylU.jpg')"
          });
        }

        var temperature = Math.round(res.currently.apparentTemperature);
        var location = city + ", " + state;

        // add temperature to document
        $targetWeatherTemperature.text(temperature);
        if (unit === "fahrenheit") {
          $targetUnit.html(" &deg;F");
        } else {
          $targetUnit.html(" &deg;C");
        }

        // add temperature bar
        $tbar.css({
          height: "10px",          
          background: "white",
          border: "3px solid #444"
        });

        // add progress bar labels
        $label32.text("32");
        $label32.css({
          position: "absolute",
          left: (32 / 120) * 100 + "%"
        });
        pl = $label32.position().left;
        $label32.css({
          left: pl - $label32.width() / 2
        });

        $label100.text("100");
        $label100.css({
          position: "absolute",
          left: (100 / 120) * 100 + "%"
        });
        pl = $label100.position().left;
        $label100.css({
          left: pl - $label100.width() / 2
        });

        $labelCurrent.css({
          width: "3px",
          height: "20px",
          border: "1px solid white",
          position: "absolute",
          left: (temperature / 120) * 100 + "%",
          bottom: "-5px",
          background: "black"
        });
        pl = $labelCurrent.position().left;
        $labelCurrent.css({
          left: pl - $labelCurrent.width() / 2
        });

        // add location to document
        $targetWeatherLocation.text(location);
      }
    })
  }

  var $zip = $("#zip");
  var $submit = $("#submit");
  //$zip.focus();
  $submit.click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var zip = $zip.val();
    if (zip === "") {
      $("body").css({
        "background-image": "url('http://i.imgur.com/FX3OeLk.jpg')"
      });
      if ($(".description").css("display") === "none") {
        $(".description").fadeIn();
        $(".weather-data").hide();
      }
      return;
    } else {
      if ($(".weather-data").css("display") === "none") {
        $(".weather-data").fadeIn();
      }
    }
    $(".description").fadeOut();
    $zip.blur();
    var url = "http://api.geonames.org/postalCodeSearchJSON?postalcode="+zip+"&country=US&username=recursive";
    $.getJSON(url, function(res) {
      getWeather(res.postalCodes);
    });
	});
})
