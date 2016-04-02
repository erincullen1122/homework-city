$( document ).ready(function() {
    console.log( "ready!" );
});


$('#submit-btn').click(swap);
$('#citytype').val();


  function swap() {
  var cityInput = $('#citytype').val();

if (cityInput === 'New York' || cityInput === 'NYC' || cityInput === 'New York City') {
     remove();
     $('body').addClass('nyc');
     event.preventDefault();
   }
   else if (cityInput === 'San Francisco' || cityInput === 'SF' || cityInput === 'Bay Area') {
     remove();
     $('body').addClass('sf');
     event.preventDefault();
   }
   else if (cityInput === 'Los Angeles' || cityInput === 'LA' || cityInput === "LAX") {
     remove();
     $('body').addClass('la');
     event.preventDefault();
   }
   else if (cityInput === 'Austin' || cityInput === 'ATX') {
     remove();
     $('body').addClass('austin');
     event.preventDefault();
   }
   else if (cityInput === 'Sydney' || cityInput === 'SYD') {
     remove();
     $('body').addClass('sydney');
     event.preventDefault();
   }
 }


function remove(){
 $('body').removeClass();
}


