console.log('hello world');

$(function() {

  // Exercise 1: Add a callback function to ready that alerts a message saying, ready for DOM manipulation.
  alert('Ready for DOM manipulation!');

  // Exercise 2.1: Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  $('#secretBox').css('background-color','white').html('<h1>secret box!</h1>');

  // Exercise 2.2: Find all child divs of the first row. Set the class for each div to boxType3.
  $('#row1 div').addClass('boxType3');

  // Exercise 2.3: Make the last box in the last row disappear.
  $('#row4 div:last-child').css('display', 'none');

  // Exercise 2.4: Change all red boxes to white.
  $('.boxType1').not('.boxType3').css('background-color', 'white');

  // Exercise 2.5: Get the first two divs in the second row. Take away all styling from the divs.
  $('#row2 div').slice(0,2).removeClass();

  // Exercise 2.6: Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  $('.box').not('#secretBox').width('2px');
});