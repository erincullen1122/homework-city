$( document ).ready(function() {
    var cities = ["austin", "sf", "nyc", "sydney", "la"];

    for (var i = 0; i < cities.length; i++) {
      $("select").append("<option>" + cities[i] + "</option>"); 
    }

    $("select").change(function(event) {
      event.preventDefault();
      var cityClass = $(this).val();
      $('body').attr('class', cityClass);
    });
});