console.log("hello world");

$('#secretBox').append('<h1>secret box!</h1>');
$('#row1').children().addClass('boxType3');
$('#row4 > div:last-child').hide();
$('div.box.boxType1').css('backgound-color', 'white');
$('#row2 > div:lt(2)').removeAttr('style');
$('#row2 > div:lt(2)').removeAttr('class');
$('.box').not(document.getElementById("secretBox"))
    .css("width", "2px");
