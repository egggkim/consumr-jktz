
$(document).ready(function(){
  console.log('Dom Loaded');

  $.getJSON( "http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric", function(response, status, jqXHR){
    console.log(response);
    // console.log(status);
    // console.log(jqXHR);


    
      for(var i = 0; i < response['list'].length; i++){
        
        $('#name' + i).text(response['list'][i]['name']);
        $('#weather' + i).text(response['list'][i]['weather'][0]['description']);
        $('#temperature' + i).text(response['list'][i]['main']['temp']);

    }
  });

});