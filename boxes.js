$(document).ready(function() {

  //EXERCISE 1

  alert("Ready for DOM manipulation");

  //EXERCISE 2

  $("#secretBox").css("background-color", "white");
  $("#secretBox").html("<h1>secret box!</h1>");

  $("#row1").children().addClass("boxType3");

  $("#row4").children().eq(3).css("display", "none");

  $(".boxType1").css("background", "white");

  $("#row2").children().slice(0,2).attr("class", "box");

  $("div").not(".row #secretBox").css("width", "2px");

  //EXERCISE 3

  $("#container").click(function(event) {
    console.log(event.pageX + " , " + event.pageY);
  });

});

//ALTERNATE CALLBACK METHOD
// $(function() {
//   alert("Ready for DOM manipulation");
// });
