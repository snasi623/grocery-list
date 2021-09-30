function getGifs(conditions) {
    var giphyAPI = 'https://api.giphy.com/v1/gifs/search?';
    var params = {
      q: conditions,
      limit: 6,
      api_key: 'EvIg8byxwnFjWckyukqSCi9jR8dV5aZ8',
      fmt: 'json'
    };
  
    $('#image-area').empty();
  
    $.ajax({
      url: giphyAPI + $.param(params),
      method: 'GET',
      success: function(r) {
        console.log(r);
  
        for (var i = 0; i < r.data.length; i++) {
            var imgURL = r.data[i].images.downsized_large.url;
            $('#image-area').append('<div class="col-sm-4 text-center"><img class="weatherGif" src="' + imgURL +'" /></div>');
        }
      }
    })
  }
  
  var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
  $('#searchForm').submit(function(e) {
    e.preventDefault();
    var query = $('#cityQuery').val() + ', ' + $('#stateSelect').val() + ', US';
    var params = {
      q: query,
      appid: '1b36a74db69e6f86487bf2188ce39962',
    }
  
    $.ajax({
      url: weatherAPI + $.param(params),
      method: 'GET',
      success: function(weatherAPI) {
        console.log(weatherAPI);
        $('#errorMessage').hide();
  
        var location = (weatherAPI.name) + ', ' + $('#stateSelect').val();
        $("#cityState").text(location);
  
        var tempF = (weatherAPI.main.temp - 273.15) * 9/5 + 32;
        $('#temperature').html(Math.round(tempF) + '&deg;F');
  
        getGifs(weatherAPI.weather[0].description);
      },
      error: function(e) {
        $('#errorMessage').show();
      }
    })
  })