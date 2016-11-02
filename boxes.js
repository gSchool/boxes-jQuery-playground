// Exercise 2

$('#secretBox').append('<h1>secret box!</h1>');
$('#row1').children().addClass('boxType3');
$('#row4 > div:last-child').hide();
$('div.box.boxType1').css('backgound-color', 'white');
$('#row2 > div:lt(2)').removeAttr('style');
$('#row2 > div:lt(2)').removeAttr('class');
$('.box').not(document.getElementById("secretBox"))
    .css("width", "2px");
$('<img src = "https://s-media-cache-ak0.pinimg.com/736x/c2/3d/f8/c23df8d247f509c4b1d680dd5406f325.jpg">');
// Exercise 3
// 1.
$('#container').click(function(event) {
    console.log("X: " + event.pageX + " Y: " + event.pageY);
});

// 2.
$('div.box.boxType1').append('<a href = "https://www.galvanize.com">Galvanize</a>').click(function(event) {
    alert("You can never leave the page.");
    event.preventDefault();
});

// 3.
$('.box').click(function(event) {
    $('.box').append('<img src = "https://s-media-cache-ak0.pinimg.com/736x/c2/3d/f8/c23df8d247f509c4b1d680dd5406f325.jpg" width= 100%>');
});
$('.box').click(function(event) {
    $('.box').empty();
});

//4.
$("#container").click(function(event) {
    if ($(event.target).is($(this))) {
        $(this).css("background-color", "limegreen");
    } else {
        $(event.target).css("background-color", "white");
        $(this).css("background-color", "black");
    }
});
