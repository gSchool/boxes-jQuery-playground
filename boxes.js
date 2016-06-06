'use strict';

$(function () {

  alert('DOM ready!');

  var $secret = $('#secretBox');
  $secret.css('background-color', 'white');
  $secret.append('<h1>secret box!</h1>');

  $('#row1 div').each(function() {

    $(this).toggleClass('boxType3');
  });

  $('#row4 div:last-child').css('display', 'none');

  $('.boxType1').each(function() {

    $(this).css('background-color', 'white');
  });

  $('#row2 div:nth-child(-n+2)').each(function() {

    $(this).removeClass();
  });

  $('#container div:not(.row)').not('#secretBox').each(function() {

    $(this).css('width', '2px');
  });
});
