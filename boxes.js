$(function(){

  /*$('#container').on('click', function(e){
    console.log("x: " + e.pageX + ", y: " + e.pageY);
  });*/

/*
  $('.box').on('click', function(){
    if($(this).hasClass("puppyImage")){
      $(this).removeClass("puppyImage").css({"padding-top":"10px"});
    } else {
      $(this).addClass("puppyImage").css({"padding-top":"0px"});
    }
  });
*/
  $('.boxType1').wrap("<a href='http://www.galvanize.com/'></a>");

  $('#container').on('click', function(event){
    console.log("no leave");
    alert("NU UH");
    event.preventDefault();
  });

/*

  document.getElementById("container").addEventListener("click", function(){
    if(){

    }
    this.style.backgroundColor = "black";
    console.log("CLICKED THE CONTAINER");
  }, false);
*/
});
