'use strict';



//alert when loaded
$(document).ready(alertReady);
	console.log('document is ready');
	function alertReady(){
		alert('ready for DOM manipulation');
}

//change css and add h1 to secretBox
$(document).ready(function(){
	console.log('entering secretBox');
	$('#secretBox').css('background-color', 'white');
	$('#secretBox').append('<h1>Secret Box!</p>');

//Find all child divs of the first row.  Set the class for each div to boxType3.
	console.log('finding all child divs of first row');
	var row1 = $('#row1').children();
	console.log(row1);
	$(row1).toggleClass('boxType3');
});

// $('#row4 boxType1').on('mouseover', function(){
// 	console.log('deleting last div of last column');
// 	$('div').remove();
// });
