console.log("hello world");

$(function() {
  alert("Ready for DOM manipulation");

  // $('#secretBox').css({'background-color': 'white'});
  // $('#secretBox').append('<h1>Secret Box!</h1>');
  //
  // $('#row1').children().addClass('boxType3');
  //
  // $('#row4').children().last().hide();
  //
  // $('.boxType1').css({'background-color': 'white'});
  //
  // $('#row2 div:nth-child(1)').removeClass();
  // $('#row2 div:nth-child(2)').removeClass();
  //
  // $('.box:not(#secretBox)').css({'width': '2px'});

  $('#container').on('click', function(e){
    console.log(e.pageX + ", " + e.pageY)
  });

  $('.boxType1').wrap('<a href="http://www.galvanize.com/"></a>');
  $('a').on('click', function(event){
    event.preventDefault();
    alert("You can never leave! MUAHAHAHAHA!!!!")
  });


  $('.box').append('<img src="http://loremflickr.com/150/150/dog" alt="dog">');
  $('.box').children().hide();

  $('.box').on('click', function(){
    $(this).children().toggle();
  });

  $('#container').on('click', function(){
    $('#container').css({'background-color': 'black'});
  });

});
