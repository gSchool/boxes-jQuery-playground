$(function() {
    alert( "ready for DOM manipulation" );
    $("#secretBox").css({backgroundColor: 'white'}).prepend('<h1>secret box!</h1>');
    $("#row1").children().attr('class', 'box boxType3');
    $('#row4').children().last().hide();
    $('.boxType1').css({backgroundColor: 'white'});
    $('#row2').children().slice(0,2).attr('class', 'blop');
    $('#container div').not(".row").not("#secretBox").css({width: '2px'});
});
