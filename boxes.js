$(document).ready(function(){
  alert("Hello, world!");
  $('#secretBox').css({'backgroundColor':'white'}).append("<h1>I'm a secret box!</h1>");
  $('#row1').children().removeClass().addClass('box boxType3');
  $('#row4 > div:last').css({'display':'none'});
});






$(window).load(function(){
  console.log("Window loaded!")
})
