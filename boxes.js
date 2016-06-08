'use strict';

$(function() {
  alert("Ready for DOM manipulation");
  $('#secretBox').css('background-color', 'white').append('<h1>secret box!</h1>');
  //$( "#row1" ).children().addClass('boxType3');
  $( '#row4 > div:last-child').css('display', 'none');
  //$('.boxType1').css('background-color', 'white');
  $('#row2 > div:nth-child(1), #row2 > div:nth-child(2)').removeClass();
  //$('.box').not('#secretBox').css('width', '2px');
  $('#container').click(function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
  });
});


$(function() {
  $('.boxType1').not("#secretBox").append('<a href="#">Go to galvanize.com</a>').click(function() {
    event.preventDefault();
    alert("Sorry, but you can't leave the page");
  });
})

//following adds puppy class
// $(function() {
//   $(".box").click(function(){
//     console.log("click works");
//     $( this ).toggleClass('puppy');
//   });
// });


$(function() {
  $('#container').click(function(event) {
    if (event.target === this) {
      $( this ).css('background-color', 'lime');
    } else {
      $( this ).css('background-color', 'black');
      $(event.target).css('background-color', 'white');
    }
  });
});
