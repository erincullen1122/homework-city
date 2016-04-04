$( document ).ready(function() {
    console.log( "ready!" );
});


//call function drop down on click
  $('.dropdown').click(function() {
 });

//nabbed this code to see if I could get drop down to work
//http://www.htmlgoodies.com/beyond/javascript/convert-a-list-into-a-select-dropdown-using-jquery.html

var $list   = $(this),
    $select = $('<select />');

$list.children('li').each(function(index) {
  $select.append($('<option />').attr('value', index).html($(this).html()));
});

$list.replaceWith($select);

//var groceries=["Milk","Cookies","Sugar","Bananas","Gatorade"];
//groceries.forEach(createLi);

var $list   = $(this),
    index   = $('.dropdown, select[id^="converted_dropdown_"]').index( this ),
    $select = $('<select />').attr('id', 'converted_dropdown_' + (index + 1));
 
 //=============================================
//need to parse this below into a short array - 
//this is way too much code

<select id="converted_dropdown_2">
  <option value="0">Austin</option>
  <option value="1">Los Angeles</option>
  <option value="2">New York City</option>
  <option value="3">San Fransico</option>
  <option value="4">Sydney</option>
</select>


//need to figure out how to change background image based on 
//drop down menu selection

function swap() {
  var cityInput = $('#citytype').val();