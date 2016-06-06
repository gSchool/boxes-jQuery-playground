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

});
