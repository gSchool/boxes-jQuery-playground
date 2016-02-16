$(function(){
  //********* 1 **********//
  /*$('#container').on('click', function(e){
    console.log("x: " + e.pageX + ", y: " + e.pageY);
  });*/


  //********* 2 **********//
  /*$('.boxType1').wrap("<a href='http://www.galvanize.com/'></a>");

  $('#container').on('click', function(event){
    console.log("no leave");
    alert("NU UH");
    event.preventDefault();
  });*/

  //********* 3 **********//
  /*$('.box').on('click', function(){
    if($(this).hasClass("puppyImage")){
      $(this).removeClass("puppyImage").css({"padding-top":"10px"});
    } else {
      $(this).addClass("puppyImage").css({"padding-top":"0px"});
    }
  });*/

  //********* 4 **********//
  document.getElementById("container").addEventListener("click", function(event){

    if( event.target.id === "container" ){
      event.target.style.backgroundColor = "#00ff00";
    } else {
      event.target.style.backgroundColor = "white";
      this.style.backgroundColor = "black";
    }

  }, false);

});
