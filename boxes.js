function readyFn( jQuery ) {
    console.log("here we go")

// 1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"

var secret = ($('#secretBox'))
secret.css('background-color',"white").append("<h1>Secret Box</h1>");



// 2. Find all child divs of the first row.  Add the class boxType3 to all of these divs.

$("#row1").children().addClass("boxType3")

// console.log($("#row1").children())


// 3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).



var lastBox = $("#row4").children().last();
$(lastBox).hide();



// 4. Change all red boxes to white.

// var redToWhite = ($(".boxType1").not(".boxType3"))
// $(redToWhite).css("background-color", "white")


// 5. Get the first two divs in the second row.  Take away all styling from the divs.

var firstTwoDivs = $("#row2").children().slice(0,2);
$(firstTwoDivs).css('background-color', "white");



// 6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

var almostAllDivs = ($("div").not(".row").not("#secretBox").not("#container"))
$(almostAllDivs).css("width", "100px")



// 1. Add an on click handler to the container div.  Console log the x and y position of the click.


$("#container").on ("click", function (e) {
        var elm = $(this);
        var xPos = e.pageX - elm.offset().left;
        var yPos = e.pageY - elm.offset().top;

        console.log(xPos, yPos);
})



// 2. Add links inside all red box divs that take the user to galvanize.  Then add an on click handler that alerts the user that you can never leave the page.  Make sure the user won't leave the page after the alert!



// var greenBoxes = ($(".boxType2"))
//
// $(greenBoxes).click(function(){
//     location.href = 'https://www.galvanize.com/boulder';
// });

// this is weird - why is it going to galvanize?
// $(greenBoxes).click(function() {
//   window.location = $(this).find("a").attr("href");
//   return false;
// });



// 3. For all box divs, add a click handler that adds an image of a cute puppy to the box.  If the image is clicked again, remove the cute puppy.



var boxDivs = ($(".box"));

$(boxDivs).on("click", function() {
  if ($(this).css("backgroundImage") === 'url("file:///Users/gdylanc/workspace/boxes-jQuery-playground/puppy.jpeg")'){
    $(this).css("backgroundImage", "");
  } else {
    $(this).css("backgroundImage","url('puppy.jpeg')");
    $(this).css("backgroundSize", "cover");
  }
})



// 4. Write a click handler __on the container div__.  The click handler should turn the container background to black and the background of the original div that was clicked to white.  If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.  You __should not__ use any selectors for this exercise.  You can do it completely with what is given to you in the event callback.


$("#container").on("click", function (e){
  console.log(e);
    if (e.target.classList[0] !== "box") {
      if ($("#container").css('background-color') === 'rgb(255, 255, 153)'){
        // console.log($("#container").css('background-color'))
        $("#container").css('background-color', "black")
      } else {
        $("#container").css('background-color', 'rgb(255, 255, 153)')
      }
    }
})

$(".box").on("click", function (){
  $(this).css("background-color", "grey")
})

















}

$( window ).on( "load", readyFn );
