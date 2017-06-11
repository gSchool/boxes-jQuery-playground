$(document).ready(function() {
  console.log("Ready for DOM manipulation");

//Find the secretBox on the page. Set the background color to white.
$('#secretBox').css("background-color", "white");

//Add an h1 tag that says, "secretBox"
$('#secretBox').html('<h1>secretBox</h1>');

//Find all child divs of the first row. Set the class for each div to boxType3
$('#row1 div').removeClass(); //remove className first
$('#row1 div').addClass('box boxType3'); //add className 'boxType3'

// Make the last box in the last row disappear.
$('#row4 div:nth-child(3)').css('display', 'none');
//$('row4').children().eq(3).css("display",'none');

//Change all red boxes to white.
$('.boxType1').css("background-color", "white");

//Get the first two divs in the second row.  Take away all styling from the divs.
// $('#row2 div').slice(0,2).css("background-color",""); my answer didnt work because of css part
$('#row2').children().slice(0,2).attr('class','box');


// Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.
$('div').not('.row #secretBox').css('width','2px');
// $('div:not(#secretBox .row)').css('width', '2px');











});
