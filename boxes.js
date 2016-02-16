
console.log("hello world");

$(document).ready(function () {
  alert("ready for DOM manipulation");
  //
  // $('#secretBox').css({'background-color': 'white'});
  // $('#secretBox').prepend('<h1>secret box!</h1>');
  // $('#row1').children().addClass('boxType3');
  // $('#row4 div:last-child').css('display', 'none');
  // $('.boxType1').css({'background-color':'white'});
  // $('#row2 div:nth-child(1)').removeClass();
  // $('#row2 div:nth-child(2)').removeClass();
  // $('.box:not(#secretBox)').css({'width': '2px'});

  $('#container').on('click', function (a) {
    console.log(a.pageX + ", "+ a.pageY);
  });

  $('.boxType1').wrap('<a href="http://www.galvanize.com"></a>');
  $('.boxType1').on('click', function () {
    alert("You can never leave this page.");
    return false;
  });

  $('.box').append('<img src="http://loremflickr.com/150/150/dog">');
  $('.box').children().hide();

  $('.box').on('click', function () {
    $(this).children().toggle();
  });

});


// // Write a click handler on the container div. The click handler should turn the container background to black and the background of the original div that was clicked to white. If the user original div that was clicked happened to be the container div, change the background of the container div to lime green. You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.
