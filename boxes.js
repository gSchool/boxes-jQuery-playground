"use strict";

console.log("hello world");
$(document).ready(function(){
  alert("DOM is ready to be manipulated!");
  var secretBox = $("#secretBox");
  secretBox.css("background-color", "white");
  secretBox.append("<h1>Secret Box!</h1>");
  // var firstRow = $("#row1");
  // firstRow.children().attr("class", "boxType3");
  // $("#row4 div").last().css("display", "none");
  // $(".boxType1").css("background-color", "white");
  // $("#row2 div:lt(2)").attr("class", "");
  // $("#container div").not(".row, #secretBox").css("width", "2px");
  $("#container").click(function(event){
    console.log("X: " + event.pageX + " Y: " + event.pageY);
  });
  $(".boxType1").not("#secretBox").append("<a href = 'http://www.galvanize.com/'>Go to Galvanize</a>");
  $("a").click(function(event){
    alert("Just kidding. You'll never escape this playground!");
    event.preventDefault();
  });
  $(".box").click(function(){
    if($(this).find("img").length === 0){
      $(this).append("<img src = 'http://cutepuppyclub.com/wp-content/uploads/2015/05/cute-puppy-sleep-1366x768.jpg' width = '100%'/>");
    }else{
      $(this).find("img").remove();
    }
  });
  $("#container").click(function(event){
    if($(event.target).is($(this))){
      $(this).css("background-color", "limegreen");
    }else{
    $(event.target).css("background-color", "white");
    $(this).css("background-color", "black");
  }
});
});
