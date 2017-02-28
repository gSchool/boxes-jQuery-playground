$(document).ready(function(){
  $('#secretBox').css("background-color","white");
  $('#secretBox').html("<h1>Secret Box!</h1>");
  $('#row1').children().attr('class', 'box boxType3');
  console.log($('#row4 div')[3].remove());
  $('.boxType1').css('background-color','white');
  $('#container div:not(#secretBox), #container div:not(.row)').css('width','2px');

});
