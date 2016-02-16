
console.log("hello world");

$(document).ready(function () {
  alert("ready for DOM manipulation");

  $('#secretBox').css({'background-color': 'white'});
  $('#secretBox').prepend('<h1>secret box!</h1>');
  $('#row1').children().addClass('boxType3');
  $('#row4 div:last-child').css('display', 'none');
  $('.boxType1').css({'background-color':'white'});
  $('#row2 div:nth-child(1)').removeClass();
  $('#row2 div:nth-child(2)').removeClass();
  $('.box:not(#secretBox)').css({'width': '2px'});
  
});
