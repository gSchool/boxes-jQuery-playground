'use strict';

// Exercise 1
$(function () {

  alert('DOM ready!');

  //2.1
  var $secret = $('#secretBox');
  $secret.css('background-color', 'white');
  $secret.append('<h1>secret box!</h1>');

  //2.2
  $('#row1 div').toggleClass('boxType3');

  //2.3
  $('#row4 div:last-child').css('display', 'none');

  //2.4
  $('.boxType1').css('background-color', 'white');

  //2.5
  $('#row2 div:nth-child(-n+2)').removeClass();

  //2.6
  $('#container div:not(.row)').not('#secretBox').css('width', '52px');

  //3.1 && 3.4
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

  //3.2
  $('.boxType1').append('<a href="www.galvanize.com">Click Me</a>');

  $('a').on('click', function(event) {

    alert('You can never leave!');
    event.preventDefault();
  });

  //3.3
  $('.box').on('click', function() {

    if ($(this).hasClass('kitten')) {
      $(this).empty();
    } else {
      $(this).append('<img src="https://placekitten.com/g/70/70">');
    }

    $(this).toggleClass('kitten');
  });
});
