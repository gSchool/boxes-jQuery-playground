$(document).ready(function() {
    $('#secretBox').css({'background-color':'white'});
    $('#secretBox').html('<h1>Secret Box!</h1>');
    $('#row1 div').addClass("boxType3")
    $('#row4 .box:nth-child(4)').css({'display':'none'});
    $('.boxType1').css({'background-color':'white'})
    $('#row2 div:nth-child(-n+2)').removeClass('box');
    $('#container div').not('div .row').not('#secretBox').css({'width':'2px'});
});
