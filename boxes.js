$(document).ready(function(){
  alert("Ready for jQuery!");

  // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  $("#secretBox").css("backgroundColor", "white");
  $("#secretBox").append("<h1>Secret Box!</h1>");

  // Find all child divs of the first row. Set the class for each div to boxType3.
  $("#row1").children().addClass("boxType3");

  // Make the last box in the last row disappear
  $("#row4").children().last().css("display", "none");

  // Change all red boxes to white.
  $(".boxType1").css("backgroundColor", "white");

  // Get the first two divs in the second row. Take away all styling from the divs.
  $("#row2 div:first-child").attr("class", "box")
  $("#row2 div:nth-child(2)").attr("class", "box")

  // Get all divs inside the container that are not row divs and are not the secret box div.
  // Set the width of the divs to 2 pixels.
  $("#container .box").not("#secretBox").width("2px");

  //Add an on click handler to the container div. Console log the x and y position of the click.
  $("#container").bind("click", function(event){
    var container = $(event.target);
    var offset = container.offset();
    console.log("x-position is: " + (event.clientX - offset.left) + " and y-position is: " + (event.clientY - offset.top));
  });

  /* Add links inside all red box divs that take the user to galvanize. Then add an on
  click handler that alerts the user that you can never leave the page. Make sure the
  user won't leave the page after the alert!
  */
  // $(".boxType1").append("<a href='http://www.galvanize.com/'>Galvanize</a>").on("click", function(){
  //   window.onbeforeunload = function(){
  //     return;
  //   }
  // });

  // For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
  $(".box").click(function(){
    if ($(this).html("")){
      // $(this).css("background", "url(puppy.jpg)")
      $(this).html("<img src='puppy.jpg'>");
    } else {
      // $(this).html("");
        // $(this).css("background", "");
    }
  });

  $("#container").click(function(event){
    $(this).css("backgroundColor", "black");
    if ($(event.target).hasClass("box")) {
      $(event.target).css("backgroundColor", "white");
    } else {
      $(this).css("backgroundColor", "limeGreen");
    }
  })
});
