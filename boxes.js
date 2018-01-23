$(function() {
  //----------------------------------------------------------------------------
  // #1
  alert("ready for DOM manipulation");
  $('#secretBox').css({'background-color': 'white'})
  $('#secretBox').append('<h1>Secret Box!</h1>');
  $('#row1').children().addClass('boxType3');
  $('#row4').children().last().css({'display': 'none'});
  $('.boxType1').css({'background-color': 'white'});
  $('#row2 > div:first').removeClass();
  $('#row2 > div:nth-child(2)').removeClass();
  $('.box').not('.row, #secretBox').css({'width': '2px'});
  $('#container').on('click', function(b){
    console.log(b.pageX);
    console.log(b.pageY);
  })

  //---------------------------------------------------------------------------
  // #2
  $('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>')
  $('a').on('click', function(){
    alert('You will never leave');
    event.preventDefault();
  })
  //---------------------------------------------------------------------------
  // #3
  $('.box').append('<img src="http://cdn.hasinstinct.com/2015/08/09/cute-puppy-with-attitude-white-dogs-puppy-cute-with.jpg" />');
  $('.box').children().hide()
  $('.box').on('click', function(){
    $(this).children().toggle();
  })
  //---------------------------------------------------------------------------
  // #4
  $('#container').on('click', function(e){
    $(this).css({'background-color': 'black'});
    $(e.target).css({'background-color': 'white'});
  })
});
