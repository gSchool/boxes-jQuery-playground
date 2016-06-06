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

    //$(this).removeClass();
    $(this).removeAttr('style');
  });

  $('#container div:not(.row)').not('#secretBox').each(function() {

    $(this).css('width', '52px');
  });

  $('#container').on('click', function(event) {

    //console.log(event.target === this);
    console.log(event.pageX, event.pageY);

    if (event.target === this) {

      $(this).css('background-color', 'LimeGreen');
    } else {

      $(this).css('background-color', 'black');
      $(event.target).css('background-color', 'white');
    }
  });

  $('.boxType1').append('<a href="www.galvanize.com">Click Me</a>');

  $('a').on('click', function(event) {

    alert('You can never leave!');
    event.preventDefault();
  });

  $('.box').on('click', function() {

    if ($(this).hasClass('kitten')) {
      $(this).empty();
    } else {
      $(this).append('<img src="https://placekitten.com/g/70/70">');
    }

    $(this).toggleClass('kitten');
  });
});
