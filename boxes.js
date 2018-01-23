
// Exercise 1
$(function () {
  alert("Let's do this!");
  // Exercise 2.1
  // $('#secretBox').css({'background-color': 'white'});
  // $('#secretBox').append('<h1>Secret Box!</h1>');
  // // Exercise 2.2
  // $('#row1 .box').addClass('boxType3');
  // // Exercise 2.3
  // $('#row1 .box:last-child').css({'display': 'none'});
  // // Exercise 2.4
  // $('.boxType1').css({'background-color': 'white'});
  // // Exercise 2.5
  // $('#row2 .box:nth-child(-n+2)').removeClass('box').removeClass('boxType2').removeClass('boxType3');
  // // Exercise 2.6
  // $('.box:not(#secretBox)').css({'width': '2px'});

  // Exercise 3.1
  $('#container').on('click', monitor);

  function monitor () {
    console.log(event.clientX + ", " + event.clientY);
  };

  // Exercise 3.2
  $('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize!</a>');
  $('.boxType1 a').on('click', alerty);

  function alerty (event) {
    alert("Ho, don't do it.");
    event.preventDefault();
  };

  //Exercise 3.3
  $('.box').on('click', function () {
    $(this).append('<img src="http://www.completepuppytraining.com/CompletePuppyTrainingPackage/3Reer-p.png" width="100px"/>');
  });

  // Exercise 3.4
  $('#container').on('click', function (event){
    console.log(event.target);
    $(this).css({'background-color': 'black'});
    $(event.target).css({'background-color': 'white'});
    if ( event.target == this ) {
      $(this).css({'background-color': '#32CD32'});
    }
  });
});
