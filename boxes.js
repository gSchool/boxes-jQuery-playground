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
	$(row1).addClass('box boxType3');
	console.log('changed all divs in first column to have class of "boxType3" ');

//Make the last box in the last row disappear.
	var row4Last = $('#row4').children().last();
	console.log('row4LastChild', row4Last);
	console.log('found last child of row4');
	$(row4Last).removeClass();
});
