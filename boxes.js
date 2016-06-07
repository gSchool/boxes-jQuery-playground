//Exercise 1
$(document).ready(function() {
  //2.1
    $('#secretBox').css({'background-color':'white'});
    $('#secretBox').html('<h1>Secret Box!</h1>');
  //2.2
    $('#row1 div').addClass("boxType3")
  //2.3
    $('#row4 .box:nth-child(4)').css({'display':'none'});
  //2.4
    $('.boxType1').css({'background-color':'white'})
  //2.5
    $('#row2 div:nth-child(-n+2)').removeClass('box');
  //2.6
    $('#container div').not('div .row').not('#secretBox').css({'width':'2px'});
});
