
$(document).ready(function() {
  console.log("hello ready");

  $('#secretBox').css("background-color", "white");
  $('#secretBox').html("<h1>secrect box</h1>");
  $('#row1').children().addClass("boxType3");
  $('#row4 div:last-child').css("display", "none");
  $('.boxType1').css("background", "white");
  $('#row2').children().slice(0, 2).remove();
  //$('#row2').eq().removeClass();
  //$("div").not(".row #secretBox").css("width", "2px");

})
