"use strict";

console.log("hello world");

$('document').ready(function () {

  //Exercise 1

  // var secretBox = $("#secretBox");
  // secretBox.css('backgroundColor','white');
  // secretBox.html('Secret Box!');
  //
  // var firstRow = $('#row1');
  // firstRow.children().removeClass().addClass('box boxType3');
  //
  // var lastRow = $('#container').children().last();
  // var veryLast = lastRow.children().last();
  // veryLast.css('display','none');
  //
  // var redBoxes = $('.boxType1');
  // redBoxes.css('backgroundColor','white');
  //
  // var secondRow1 = $('#row2').children()[0];
  // secondRow1.className = '';
  //
  // var secondRow2 = $('#row2').children()[1];
  // secondRow2.className = '';
  //
  // var notSecret = $('.box:not(#secretBox)');
  // notSecret.css('width','2px');

  //Exercise 2

  var container = $('#container');
  container.click(function(event) {
    console.log(event.clientX + ',' + event.clientY);
  });

  var redBoxes = $('.boxType1');
  redBoxes.html('<a href="http://galvanize.com">Galvanize</a>');
  $('a').click(function(event) {
    alert('You can never leave the page!');
    event.preventDefault();
  });

  var boxes = $('.box');
  var kitten = $('<img class="kitten" src="http://placekitten.com/100/100">').css('display','none');
  boxes.append(kitten);
  boxes.click(function() {
    $(this).children('.kitten').toggle();
  });

});
