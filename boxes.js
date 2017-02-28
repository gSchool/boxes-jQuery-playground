console.log("hello world");
$(document).ready(function(){
  $('#secretBox').css('background-color','white');
  $('#secretBox').append('<h1>Secret Box!</h1>');

  $('#row1').children().addClass('boxType3');
  $('#row4').children().last().hide();

  $('.row').children().filter('.boxType1').css('background-color','white');

  for(var i = 0; i < 2; i++){
    $('#row2').children().eq(i).removeClass('boxType2 boxType3');
  }

/*
  $('.row').children().not('#secretBox, .row').css('width', '2px');
*/


  $('#container').click(function(){
    var x = event.pageX;
    var y = event.pageY;
    console.log('[' + x +',' + y + ']');
  });

  $('.row').children().filter('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>');

  $('.row').children().click(function(){
    $(this).toggleClass('img');
  });


  $('#container').click(function(){
    $('#container').css('background-color','lime');
  });

  $('#container').children().click(function(){
    $(this).css('background-color','white');
    console.log($(this).children());
    $('#container').css('background-color','black');
    event.stopPropagation();
  });


});
