
$(function(){
  console.log("ready");


  $('#secretBox').css('background', 'white')
    .append("<h1> secret box </h1>");


  $('#row1').children()
    .addClass('boxType3');


  $('.box:nth-last-child(1)')
    .css('display', 'none');


  $( ".boxType1").css( "background-color", "white" );


  $("#row2").find("div:nth-child(1), div:nth-child(2)")
    .removeClass();


  $("#container div").not("#secretBox, .row")
    .css('width','2px');


});


