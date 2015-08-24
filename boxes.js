console.log('hello world');

$(function() {

  // Exercise 1: Add a callback function to ready that alerts a message saying, ready for DOM manipulation.
  alert('Ready for DOM manipulation!');

  // Exercise 2 
  // 2.1: Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  // $('#secretBox').css('background-color','white').html('<h1>secret box!</h1>');

  // 2.2: Find all child divs of the first row. Set the class for each div to boxType3.
  // $('#row1 div').addClass('boxType3');

  // 2.3: Make the last box in the last row disappear.
  // $('#row4 div:last-child').css('display', 'none');

  // 2.4: Change all red boxes to white.
  // $('.boxType1').css('background-color', 'white');

  // 2.5: Get the first two divs in the second row. Take away all styling from the divs.
  // $('#row2 div').slice(0,2).removeClass();

  // 2.6: Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  // $('.box').not('#secretBox').width('2px');

  // Exercise 3
  // 3.1 Add an on click handler to the container div. Console log the x and y position of the click.
  // $('#container').click(function(e) {
  //   console.log('('+e.pageX+','+e.pageY+')');
  // });

  /* 3.2 Add links inside all red box divs that take the user to galvanize. 
  Then add an on click handler that alerts the user that you can never leave the page. 
  Make sure the user won't leave the page after the alert! */
  // $('.boxType1').append('<a href="http://www.galvanize.com">Galvanize</a>').css('position,relative');
  // $('a').click(function(e) {
  //   e.preventDefault();
  //   alert('You can never leave this page! Hahahahaha!');
  // });

  /* 3.3 For all box divs, add a click handler that adds an image of a cute puppy to the box. 
  If the image is clicked again, remove the cute puppy. */
  // var currentBg, newBg;
  // $('.box').click(function() {
  //   currentBg = $(this).css('background-image');
  //   $(this).css('background-image', currentBg === 'none' ? 'url(whiskey.png)' : 'none');
  // });

  /* 3.4 Write a click handler on the conatainer div. 
  The click handler should turn the container background to black 
  and the background of the original div that was clicked to white. 
  If the user original div that was clicked happened to be the container div, 
  change the background of the container div to lime green. 
  You should not use any selectors for this exercise.*/
  // $('#container').click(function(e) {
  //   var tgt = e.target;
  //   if (tgt.classList.contains('box')) {
  //     this.style.backgroundColor = 'black';
  //     tgt.style.backgroundColor = 'white';
  //   } else {
  //     this.style.backgroundColor = 'limegreen';
  //   }
  // });
    
  // });

});