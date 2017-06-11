'use strict';
console.log("hello world");

//### Exercise 1 - DOM Ready First part that I tried is commented out
//then second part is shorthand alert.
// $( document ).ready(function() {
//     alert('ready for DOM manipulation');
// });

$(function() {
            alert('ready for DOM manipulation');


            // ### Exercise 2 - Selectors, CSS, Attributes
            //
            // Go to the [MDN docs for selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).  Read through the docs to get an idea of how selectors work.  Next, look at the [jQuery page on selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/).
            //
            // 1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"

            // console.log($('#secretBox'));
            //
            // $('#secretBox').css('background-color', 'white');
            //
            //
            // var $h1 = $('<h1> SecretBox </h1>');
            // $('#secretBox').append($h1);
            //
            // // 2. Find all child divs of the first row.
            // //Set the class for each div to boxType3.
            // console.log($('#row1 > div'));
            // $('#row1 > div').addClass('boxType3');
            //
            //
            //
            //
            // // 3. Make the last box in the last row disappear.
            // //(Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
            //
            //  // $('.box.boxType1:last-child').css("display", 'none');
            //
            // $('#row4 div.box.boxType1:last-child').css("display", 'none');
            // // 4. Change all red boxes to white.
            //
            // $('.boxType1').css('background-color', 'white');
            // // 5. Get the first two divs in the second row.  Take away all styling from the divs.
            // $('#row2').children().slice(0,2).removeClass();


            //
            // // 6. Get all divs inside the container that are not row divs and are not the
            // //secret box div.  Set the width of the divs to 2 pixels.
            //
            // $('.box').not('#secretBox').css('width', '2px');
            //
            //


            // ### Exercise 3 - Events
            //
            // 1. Add an on click handler to the container div.  Console log the x and y position of the click.
            $('#container').click(function(e) {
                console.log(e.pageX + " " + e.pageY);
            });


            // 2. Add links inside all red box divs that take the user to galvanize.
            //Then add an on click handler that alerts the user that you can never leave the page.
            //Make sure the user won't leave the page after the alert!
            $('.boxType1').html('<a href="http://www.galvanize.com/">Galvanize</a>');


            $('.boxType1').click(function(event) {
                alert("you can never leave the page!");
                event.preventDefault();
            });



            // 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.
            // If the image is clicked again, remove the cute puppy.

            $('.box').click(function() {
              if($(this).hasClass('pupppy')) {
                $(this).empty();
              }else {
                $(this).append('<img src="https://pixabay.com/static/uploads/photo/2015/02/05/12/09/chihuahua-624924_960_720.jpg">');
                $('img').css('height','100%');
                
              }
              $(this).toggleClass('pupppy');
            });



            // 4. Write a click handler __on the container div__.
            //The click handler should turn the container background to black and the background
            //of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div,
            //change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.

            $('#container').click(function(event) {
                $(this).css('background-color', 'black');
                $(event.target).css('background-color', 'white');
                // console.log($(this));
                // console.log($(this).is(event.target));
                if ($(this).is(event.target) === true) {
                      $(this).css('background-color', 'lime');


                }
              });

            });
