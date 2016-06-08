//Exercise 1
$(document).ready(function() {
  //2.1
    $('#secretBox').css({'background-color':'white'});
    $('#secretBox').html('<h1>Secret Box!</h1>');
  //2.2
    //$('#row1 div').addClass("boxType3")
  //2.3
    //$('#row4 .box:nth-child(4)').css({'display':'none'});
  //2.4
    //$('.boxType1').css({'background-color':'white'})
  //2.5
    //$('#row2 div:nth-child(-n+2)').removeClass('box');
  //2.6
    //$('#container div').not('div .row').not('#secretBox').css({'width':'2px'});
  //3.1
    // $('#container').click(function(e) {
    //  var offset = $(this).offset();
    //  alert("X: "+Number(e.pageX - offset.left)+" "+"Y: " +Number(e.pageY - offset.top));
    // });
  //3.2
    // $(".box").click(function() {
    //   window.location='http://www.galvanize.com/';
    //   alert('You can never leave! MUAHAHAH')
    //   return false;
    // });
  //3.3
  // $('.box').append('<img class="pup" src="http://science-all.com/images/wallpapers/cute-puppy-pictures/cute-puppy-pictures-8.jpg"/>')
  // $('.pup').css({'max-width':'100%'})
  // $('.pup').hide();
  //
  // $('.box').click(function() {
  //   $(this).children().toggle();
  // })
  //3.4
  $('#container').on('click', function(x){
    if(x.target.id === 'container'){
      $(this).css('background-color', 'lightgreen');
    }else{
      $(x.target).css('background-color', 'white');
      $('#container').css('background-color', 'black');
    }
  });
})
