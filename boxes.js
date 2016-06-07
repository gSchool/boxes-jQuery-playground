$( document ).ready(function() {


// // Exercise #2 - Commented Out for Events in Exercise #3
  // $(document).find('#secretBox').css('background-color', 'white');
  // $(document).find('#secretBox').html('<h1>Secret box!</h1>');
  //
  // $('#row1').children().attr('class', 'boxType3');
  //
  // $('#row4 div:last-child').css('display', 'none');
  //
  // $('.boxType1').css('background-color', "white");
  //
  // $('#row2 div:nth-child(-n+2)').attr('class', '');
  //
  //
  // $("#container div").not('.row').not('#secretBox').css('width', '2px');

//Exercise #3 -
  //
  // $('#container').on('click', function(event){
  //   console.log(event.pageX, event.pageY);
  // })
  //
  $('.boxType1').not('#secretBox').html('<a id="forever" href="http://www.galvanize.com">ClickHere!</a>');

  $('.boxType1 a').on('click', function(event){
    alert('HAHAHA you can never leave this page ever!');
    event.preventDefault();
  });

//   $('.box').append('<img class="togglePup" src="https://s-media-cache-ak0.pinimg.com/736x/dd/59/a2/dd59a2d7fce53a8cf08b792377b9dbe9.jpg"' + '/>');
//   $('.togglePup').css('max-height', '100%');
//   $(".togglePup").hide();
//
//   $(".box").on('click', function(){
//   $(this).children().toggle();
// });
  //
  // $("#container").on('click', function(e){
  //   if (e.target.id === 'container') {
  //     $(this).css('background-color', "lightgreen");
  //   } else {
  //     console.log(e.target);
  //     console.log('^^^');
  //     $(e.target).css('background-color', 'white');
  //     $('#container').css('background-color', 'black');
  //   }
  //
  // })


});
