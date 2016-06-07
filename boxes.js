'use strict';



//alert when loaded
$(document).ready(alertReady);
	console.log('document is ready');
	function alertReady(){
		alert('ready for DOM manipulation');
}

$(document).ready(function(){
//change css and add h1 to secretBox
	console.log('entering secretBox');
	$('#secretBox').css('background-color', 'white');
	$('#secretBox').append('<h1>Secret Box!</p>');

//Find all child divs of the first row.  Set the class for each div to boxType3.
	console.log('finding all child divs of first row');
	var row1 = $('#row1').children();
	console.log(row1);
	$(row1).removeClass();
	console.log('removed original class of boxtype');
	$(row1).addClass('box boxType3');
	console.log('set all divs in first column to have class of "boxType3" ');

//Make the last box in the last row disappear.
	var row4Last = $('#row4').children().last();
	console.log('row4LastChild', row4Last);
	console.log('found last child of row4');
	$(row4Last).removeClass();

//Get the first two divs in the second row.  Take away all styling from the divs
	$('#row2').each (function(){
		var row2FirstTwo = $(this).children().slice(0,2).show();
		console.log('first two children of row 2', row2FirstTwo);
		$(row2FirstTwo).removeClass();
	});

//Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.
	// $('div').each(function(){
	// 	var divs = $('.box').not('#secretBox');
	// 	divs.css('width', '2px');
	// });

//Add an on click handler to the container div.  Console log the x and y position of the click.
	$('#container').on('click', function(e){
    var offset = $(this).offset();
    console.log('x-axis', e.pageX - offset.left);
    console.log('y-axis', e.pageY - offset.top);
	});

//Add links inside all red box divs that take the user to galvanize.
	$('.boxType1').append('<a target="_blank" href = "http://www.galvanize.com/">werds</a>');
//Then add an on click handler that alerts the user that you can never leave the page.
	var a = $('a');
	$(a).on('click', function(e){
		console.log('entering prevent default');
		e.preventDefault();
		//Make sure the user won't leave the page after the alert!
		confirm("You'll never get out of this maze");
	});
//For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.

	// $('.box').on('click', function(){
	// 	console.log('entering background change');
	// 	var box = $(this);
	// 	if(!(box.hasClass('url'))){
	// 	box.css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/0/03/Lorem.gif)');
	// } else {
	// 	box.css('background-image', 'none');
	// }
	// $(this).toggleClass('url');
	// });
	//Write a click handler __on the container div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.
	$('#container').on('click', function(e){
		if ((e.target).hasClass('box')){
			$(e.target).css('background-color','white');
			$(this).css('background-color','black');
		} else {

		}
	});

});
