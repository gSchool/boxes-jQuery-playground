'use strict';
//variable declaration
// var $secretBox;
// $secretBox = ('#secretBox');


//alert when loaded
$(document).ready(alertReady);
	console.log('document is ready');
	function alertReady(){
		alert('ready for DOM manipulation');
}

$('#secretBox').ready(function(){
	console.log('entering secretBox');
	$('#secretBox').css('background-color', 'white');
	$('#secretBox').append('<h1>Secret Box!</p>');
});
