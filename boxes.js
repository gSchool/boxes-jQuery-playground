$(function() {
  console.log( "ready!" );
  $('#secretBox').on('mouseover', function(){
    $(this).css({'background-color': 'white', 'border-bottom': '1px solid black'})
  }).append('<h1>Secret box!</h1>');
  $('#row1 > div').on('mouseover', function(){
    $(this).addClass('boxType3')
  });
  $('#row1 > div:last-child').on('mouseover', function(){
    $(this).css({'display': 'none'})
  });
  $('.boxType1').on('mouseover', function(){
    $(this).css({'background-color': 'white', 'border-bottom': '1px solid black'})
  });
});
// console.log("hello world");
