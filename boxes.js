$(document).ready(function() {
  // alert('ready for DOM manipulation');
  // $('#secretBox').css('background-color','white');
  // $('#secretBox').append('<h1>secret box!</h1>');
  // $('#row1 > div').removeClass('boxType2 boxType1').addClass('boxType3');
  // $('.boxType1').css('background','white');
  // $('#row4 div:nth-child(4)').css('visibility','hidden');
  // $('#row2 div:nth-child(1)').removeClass('box boxType1 boxType3 boxType2');
  // $('#row2 div:nth-child(2)').removeClass('box boxType1 boxType3 boxType2');
  // $('.box:not(#secretBox)').css('width','2px');

  // $('#container').on('click',function(e){
  //   var xPos = e.clientX;
  //   var yPos = e.clientY;
  //   console.log('xposition = '+ xPos, 'yposition = '+yPos);
  // });
  // $('.boxType1').html('<a href="http://galvanize.com">Galvanize</a>');
  // $('a').on('click',function(){
  //   alert('no leaving!!!');
  //   event.preventDefault();
  // });


  // $('.box').on('click',function(){
  //   var clicked = $(this);
  //   if (clicked.css('background-image') === 'none') {
  //     clicked.css('background-image',"url('http://www.successpuppytraining.com/wp-content/uploads/2014/09/testimony-monty-50x50.jpg')");
  //   } else {
  //     clicked.css('background-image','');
  //   }
  // });

  $('#container').on('click',function(e){
    if (e.target === this) {
      $(this).css('background-color','lime');
    } else {
      $(this).css('background-color','black');
      $(e.target).css('background-color','white');
    }
  });

  console.log("hello world");

});
